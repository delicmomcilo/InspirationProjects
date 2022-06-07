import { call, put, select, takeLatest, StrictEffect } from 'redux-saga/effects';
import { createQuery, get, post } from 'src/redux/request';
import { WATCH_GET, WATCH_GET_DETAILS, WATCH_POST_INVOICE_EMAIL } from './sagaConstants';
import {
  getInvoices,
  getInvoicesSuccess,
  getInvoicesFailure,
  getInvoiceDetails,
  getInvoiceDetailsSuccess,
  getInvoiceDetailsFailure,
  postInvoiceEmail,
  postInvoiceEmailSuccess,
  postInvoiceEmailFailure,
} from './actions';
import { api } from '../../../config';
import selectors from '../../selectors';
import { InvoicePagination } from './types/actions.types';
import {
  GetInvoiceDetailsAsync,
  GetInvoicesAsync,
  PostInvoiceEmailAsync,
  // Response,
} from './types/sagas.types';
import { RequestResponse } from '../../request/request.types';

export function* getInvoicesAsync(action: GetInvoicesAsync): Generator<StrictEffect> {
  const { payload } = action;
  const { Page } = payload;

  try {
    const nameId = yield select(selectors.auth0.nameId);
    const query = {
      Page,
      FromDueDate: '2001-01-30T23:59:59.999Z',
      PageSize: 12,
      nameId,
    };
    const hasShortLastPage = ({
      CurrentPage,
      TotalPages,
      PageSize,
      TotalCount,
    }: InvoicePagination) =>
      CurrentPage === TotalPages - 1 && (TotalPages * PageSize) % TotalCount > PageSize / 2;

    let qs = createQuery(query);
    yield put(getInvoices());
    const response = (yield call(get, {
      url: `${api.invoiceBaseUrl}/invoice${qs}`,
    })) as RequestResponse;
    const {
      json: invoices,
      response: { headers },
    } = response;
    const XPagination = headers.get('X-Pagination');
    if (XPagination) {
      const invoicePagination = JSON.parse(XPagination);
      yield put(getInvoicesSuccess({ invoices, invoicePagination }));
      if (hasShortLastPage(invoicePagination)) {
        query.Page = Page + 1;
        qs = createQuery(query);
        const lastCallResponse = (yield call(get, {
          url: `${api.invoiceBaseUrl}/invoice${qs}`,
        })) as RequestResponse;
        const {
          json: invoices2,
          response: { headers: lastCallHeaders },
        } = lastCallResponse;
        const XPaginationLC = lastCallHeaders.get('X-Pagination');
        if (XPaginationLC) {
          const lastCallPagination = JSON.parse(XPaginationLC);
          yield put(
            getInvoicesSuccess({
              invoices: invoices2,
              invoicePagination: lastCallPagination,
            }),
          );
        }
      }
    }
  } catch (error) {
    yield put(getInvoicesFailure({ error: error.toString() }));
  }
}

export function* getInvoiceDetailsAsync(action: GetInvoiceDetailsAsync): Generator<StrictEffect> {
  const { id } = action.payload;
  try {
    yield put(getInvoiceDetails());
    const { json: invoice } = (yield call(get, {
      url: `${api.invoiceBaseUrl}/invoice/${id}`,
    })) as RequestResponse;
    yield put(getInvoiceDetailsSuccess({ invoice }));
  } catch (error) {
    yield put(getInvoiceDetailsFailure({ error: error.toString() }));
  }
}

export function* postInvoiceEmailAsync(action: PostInvoiceEmailAsync): Generator<StrictEffect> {
  try {
    yield put(postInvoiceEmail());

    yield call(post, {
      url: `${api.invoiceBaseUrl}/invoice/${action.payload.id}/send?Email=${action.payload.email}`,
    });

    yield put(postInvoiceEmailSuccess());
  } catch (error) {
    yield put(postInvoiceEmailFailure({ error }));
  }
}

/* istanbul ignore next */
export default function*(): Generator<StrictEffect> {
  yield takeLatest(WATCH_GET, getInvoicesAsync);
  yield takeLatest(WATCH_GET_DETAILS, getInvoiceDetailsAsync);
  yield takeLatest(WATCH_POST_INVOICE_EMAIL, postInvoiceEmailAsync);
}
