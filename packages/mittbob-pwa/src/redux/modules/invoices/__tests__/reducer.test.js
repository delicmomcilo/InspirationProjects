import reducer, { initialState } from '../reducer';
import {
  GET,
  GET_SUCCESS,
  GET_FAILURE,
  GET_INVOICE_DETAILS,
  GET_INVOICE_DETAILS_SUCCESS,
  GET_INVOICE_DETAILS_FAILURE,
  POST_INVOICE_RESET_STATUS,
  POST_INVOICE_EMAIL_FAILURE,
  POST_INVOICE_EMAIL,
  POST_INVOICE_EMAIL_SUCCESS,
} from '../constants';
import {
  getInvoices,
  getInvoicesSuccess,
  getInvoicesFailure,
  getInvoiceDetails,
  getInvoiceDetailsSuccess,
  getInvoiceDetailsFailure,
  postInvoiceResetStatus,
  postInvoiceEmailSuccess,
  postInvoiceEmailFailure,
  postInvoiceEmail,
} from '../actions';

describe('modules/invoices/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${GET}`, () => {
    expect(reducer(initialState, getInvoices())).toEqual({
      ...initialState,
      loadingList: true,
    });
  });
  it(`should handle ${GET_SUCCESS}`, () => {
    const invoices = ['a', 'b', 'c'];
    const invoicePagination = undefined;
    expect(reducer(initialState, getInvoicesSuccess({ invoices, invoicePagination }))).toEqual({
      ...initialState,
      invoices,
      invoicePagination,
      loadingList: false,
    });
  });
  it(`should handle ${GET_FAILURE}`, () => {
    const error = new Error('I am error');
    expect(reducer(initialState, getInvoicesFailure({ error }))).toEqual({
      ...initialState,
      loadingList: false,
      error,
    });
  });

  it(`should handle ${GET_INVOICE_DETAILS}`, () => {
    expect(reducer(initialState, getInvoiceDetails())).toEqual({
      ...initialState,
      loadingDetails: true,
    });
  });
  it(`should handle ${GET_INVOICE_DETAILS_SUCCESS}`, () => {
    const invoice = { id: 123 };
    expect(reducer(initialState, getInvoiceDetailsSuccess({ invoice }))).toEqual({
      ...initialState,
      invoiceDetails: { ...initialState.invoiceDetails, [invoice.id]: invoice },
      loadingDetails: false,
    });
  });
  it(`should handle ${GET_INVOICE_DETAILS_FAILURE}`, () => {
    const error = new Error('I am error');
    expect(reducer(initialState, getInvoiceDetailsFailure({ error }))).toEqual({
      ...initialState,
      loadingDetails: false,
      error,
    });
  });

  it(`should handle ${POST_INVOICE_EMAIL}`, () => {
    expect(reducer(initialState, postInvoiceEmail())).toEqual({
      ...initialState,
      sendingEmail: true,
    });
  });
  it(`should handle ${POST_INVOICE_EMAIL_SUCCESS}`, () => {
    const invoice = { test: 'test' };
    expect(reducer(initialState, postInvoiceEmailSuccess({ invoice }))).toEqual({
      ...initialState,
      sendingEmail: false,
      successFulEmailSend: true,
      attemptedEmailSend: true,
    });
  });
  it(`should handle ${POST_INVOICE_EMAIL_FAILURE}`, () => {
    const error = new Error('I am error');
    expect(reducer(initialState, postInvoiceEmailFailure({ error }))).toEqual({
      ...initialState,
      sendingEmail: false,
      successFulEmailSend: false,
      attemptedEmailSend: true,
      error,
    });
  });
  it(`should handle ${POST_INVOICE_RESET_STATUS}`, () => {
    const error = new Error('I am error');
    expect(reducer(initialState, postInvoiceResetStatus({ error }))).toEqual({
      ...initialState,
      successFulEmailSend: false,
      attemptedEmailSend: false,
    });
  });
});
