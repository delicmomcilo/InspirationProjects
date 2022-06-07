import {
  getInvoices,
  getInvoicesSuccess,
  getInvoicesFailure,
  watchGetInvoices,
  getInvoiceDetails,
  getInvoiceDetailsSuccess,
  getInvoiceDetailsFailure,
  watchGetInvoiceDetails,
  postInvoiceEmail,
  postInvoiceEmailFailure,
  postInvoiceEmailSuccess,
  postInvoiceResetStatus,
  watchPostInvoiceEmail,
  clearInvoiceApiState,
} from '../actions';
import {
  GET,
  GET_FAILURE,
  GET_SUCCESS,
  GET_INVOICE_DETAILS,
  GET_INVOICE_DETAILS_FAILURE,
  GET_INVOICE_DETAILS_SUCCESS,
  POST_INVOICE_EMAIL_FAILURE,
  POST_INVOICE_EMAIL,
  POST_INVOICE_EMAIL_SUCCESS,
  POST_INVOICE_RESET_STATUS,
  CLEAR_INVOICE_API_STATE,
} from '../constants';
import { WATCH_GET, WATCH_GET_DETAILS, WATCH_POST_INVOICE_EMAIL } from '../sagaConstants';

describe('modules/invoices/actions', () => {
  it('getInvoices', () => {
    expect(getInvoices()).toEqual({
      type: GET,
    });
  });

  it('postClearInvoiceList', () => {
    expect(clearInvoiceApiState()).toEqual({
      type: CLEAR_INVOICE_API_STATE,
    });
  });

  it('getInvoicesSuccess', () => {
    const invoices = ['a', 'b', 'c'];
    const invoicesPagination = undefined;
    expect(getInvoicesSuccess({ invoices, invoicesPagination })).toEqual({
      type: GET_SUCCESS,
      payload: { invoices, invoicesPagination },
    });
  });
  it('getInvoicesFailure', () => {
    const error = new Error('I am error');
    expect(getInvoicesFailure({ error })).toEqual({
      type: GET_FAILURE,
      payload: { error },
    });
  });
  it('watchGetInvoices', () => {
    const Page = 1;
    expect(watchGetInvoices(Page)).toEqual({
      type: WATCH_GET,
      payload: { Page },
    });
  });

  it('getInvoiceDetails', () => {
    expect(getInvoiceDetails()).toEqual({
      type: GET_INVOICE_DETAILS,
    });
  });
  it('getInvoicesDetailsSuccess', () => {
    const invoice = {};
    expect(getInvoiceDetailsSuccess({ invoice })).toEqual({
      type: GET_INVOICE_DETAILS_SUCCESS,
      payload: { invoice },
    });
  });
  it('getInvoiceDetailsFailure', () => {
    const error = new Error('I am error');
    expect(getInvoiceDetailsFailure({ error })).toEqual({
      type: GET_INVOICE_DETAILS_FAILURE,
      payload: { error },
    });
  });
  it('watchGetInvoiceDetails', () => {
    const id = 1;
    expect(watchGetInvoiceDetails(id)).toEqual({
      type: WATCH_GET_DETAILS,
      payload: { id },
    });
  });

  it('getInvoiceDetails', () => {
    expect(postInvoiceEmail()).toEqual({
      type: POST_INVOICE_EMAIL,
    });
  });
  it('getInvoicesDetailsSuccess', () => {
    expect(postInvoiceEmailSuccess()).toEqual({
      type: POST_INVOICE_EMAIL_SUCCESS,
    });
  });
  it('getInvoiceDetailsFailure', () => {
    const error = new Error('I am error');
    expect(postInvoiceEmailFailure({ error })).toEqual({
      type: POST_INVOICE_EMAIL_FAILURE,
      payload: { error },
    });
  });
  it('watchPostInvoiceEmail', () => {
    const id = 1;
    const email = 'test@email.com';
    expect(watchPostInvoiceEmail(id, email)).toEqual({
      type: WATCH_POST_INVOICE_EMAIL,
      payload: { id, email },
    });
  });
  it('postInvoiceResetStatus', () => {
    expect(postInvoiceResetStatus()).toEqual({
      type: POST_INVOICE_RESET_STATUS,
    });
  });
});
