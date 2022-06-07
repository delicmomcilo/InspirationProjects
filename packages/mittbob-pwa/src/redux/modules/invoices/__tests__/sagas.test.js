import { testSaga } from 'redux-saga-test-plan';
import { post, createQuery, get } from '../../../request';
import { getInvoicesAsync, getInvoiceDetailsAsync, postInvoiceEmailAsync } from '../sagas';
import {
  getInvoices,
  getInvoicesFailure,
  getInvoicesSuccess,
  getInvoiceDetails,
  getInvoiceDetailsFailure,
  getInvoiceDetailsSuccess,
  postInvoiceEmail,
  postInvoiceEmailFailure,
  postInvoiceEmailSuccess,
} from '../actions';

import { api } from '../../../../config';
import selectors from '../../../selectors';

describe('modules/invoices/sagas', () => {
  const error = new Error('I am an error');
  it.each([{ success: true }, { success: false }])(
    '%o',
    ({ success }) => {
      const auth0NameId = '321';

      const qs = createQuery({
        Page: 5,
        FromDueDate: '2001-01-30T23:59:59.999Z',
        PageSize: 12,
        nameId: auth0NameId,
      });
      const args = {
        url: `${api.invoiceBaseUrl}/invoice${qs}`,
      };
      const invoicePagination = {
        CurrentPage: 5,
        PageSize: 12,
        TotalPages: 6,
        TotalCount: 65,
        HasPrevious: false,
        HasNext: true,
        NextPage: null,
        PreviousPage: null,
      };
      const response = {
        status: 200,
        headers: { get: () => JSON.stringify(invoicePagination) },
      };
      const invoices = [1, 2, 3, 4, 5];

      const saga = testSaga(getInvoicesAsync, {
        payload: { Page: 5 },
      })
        .next()
        .select(selectors.auth0.nameId)
        .next(auth0NameId)
        .put(getInvoices())
        .next()
        .call(get, args);

      if (success) {
        saga
          .next({ json: invoices, response })
          .put(getInvoicesSuccess({ invoices, invoicePagination }))
          .next()
          .call(get, { url: args.url.replace('Page=5', 'Page=6') })
          .next({ json: invoices, response })
          .put(getInvoicesSuccess({ invoices, invoicePagination }));
      } else saga.throw(error).put(getInvoicesFailure({ error: error.toString() }));
      saga.next().isDone();
    },
  );

  it.each([{ success: true }, { success: false }])(
    'should return invoice detail %o',
    ({ success }) => {
      const id = '14';
      const response = { status: 200 };
      const args = {
        url: `${api.invoiceBaseUrl}/invoice/${id}`,
      };
      const invoice = { id };
      const saga = testSaga(getInvoiceDetailsAsync, {
        payload: { id },
      })
        .next({ id })
        .put(getInvoiceDetails())
        .next({ id })
        .call(get, args);

      if (success) saga.next({ json: { id }, response }).put(getInvoiceDetailsSuccess({ invoice }));
      else saga.throw(error).put(getInvoiceDetailsFailure({ error: error.toString() }));
      saga.next().isDone();
    },
  );

  it.each([{ success: true }, { success: false }])(
    'should return email status %o',
    ({ success }) => {
      const id = '14';
      const email = 'test@test.com';
      const saga = testSaga(postInvoiceEmailAsync, {
        payload: { id, email },
      })
        .next(1)
        .put(postInvoiceEmail())
        .next(1)
        .call(post, {
          url: `${api.invoiceBaseUrl}/invoice/${id}/send?Email=${email}`,
        })
        .next();

      if (success) saga.put(postInvoiceEmailSuccess());
      else saga.throw(error).put(postInvoiceEmailFailure({ error }));
    },
  );
});
