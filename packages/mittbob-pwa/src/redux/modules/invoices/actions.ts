import {
  GET,
  GET_SUCCESS,
  GET_FAILURE,
  GET_INVOICE_DETAILS,
  GET_INVOICE_DETAILS_SUCCESS,
  GET_INVOICE_DETAILS_FAILURE,
  POST_INVOICE_EMAIL,
  POST_INVOICE_EMAIL_FAILURE,
  POST_INVOICE_EMAIL_SUCCESS,
  POST_INVOICE_RESET_STATUS,
  CLEAR_INVOICE_API_STATE,
} from './constants';
import { WATCH_GET, WATCH_GET_DETAILS, WATCH_POST_INVOICE_EMAIL } from './sagaConstants';
import { Details, Email, Error, InvoiceId, Invoices } from './types/actions.types';

export const getInvoices = () => ({ type: GET } as const);

export const getInvoicesSuccess = ({ invoices, invoicePagination }: Invoices) =>
  ({
    type: GET_SUCCESS,
    payload: {
      invoices,
      invoicePagination,
    },
  } as const);

export const getInvoicesFailure = ({ error }: Error) =>
  ({
    type: GET_FAILURE,
    payload: { error },
  } as const);

export const getInvoiceDetails = () => ({ type: GET_INVOICE_DETAILS } as const);
export const getInvoiceDetailsSuccess = ({ invoice }: Details) =>
  ({
    type: GET_INVOICE_DETAILS_SUCCESS,
    payload: {
      invoice,
    },
  } as const);
export const getInvoiceDetailsFailure = ({ error }: Error) =>
  ({
    type: GET_INVOICE_DETAILS_FAILURE,
    payload: { error },
  } as const);

export const postInvoiceEmail = () => ({ type: POST_INVOICE_EMAIL } as const);
export const postInvoiceEmailSuccess = () =>
  ({
    type: POST_INVOICE_EMAIL_SUCCESS,
  } as const);

export const postInvoiceEmailFailure = ({ error }: Error) =>
  ({
    type: POST_INVOICE_EMAIL_FAILURE,
    payload: { error },
  } as const);

export const postInvoiceResetStatus = () =>
  ({
    type: POST_INVOICE_RESET_STATUS,
  } as const);

export const clearInvoiceApiState = () =>
  ({
    type: CLEAR_INVOICE_API_STATE,
  } as const);

export const watchGetInvoices = (Page: number) =>
  ({
    type: WATCH_GET,
    payload: { Page },
  } as const);

export const watchGetInvoiceDetails = (id: InvoiceId) =>
  ({
    type: WATCH_GET_DETAILS,
    payload: { id },
  } as const);

export const watchPostInvoiceEmail = (id: InvoiceId, email: Email) =>
  ({
    type: WATCH_POST_INVOICE_EMAIL,
    payload: { id, email },
  } as const);
