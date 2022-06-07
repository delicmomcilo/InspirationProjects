import * as actions from '../actions';
import { Invoice, InvoiceDetails } from '.';

export interface State {
  loadingDetails: boolean;
  sendingEmail: boolean;
  loadingList: boolean;
  invoices: Array<Invoice>;
  invoiceDetails: { [id: number]: InvoiceDetails };
  successFulEmailSend: boolean;
  attemptedEmailSend: boolean;
  invoicePagination: Pagination;
}

export interface Pagination {
  CurrentPage: number;
  PageSize: number;
  TotalPages: number;
  TotalCount: number;
  HasPrevious: boolean;
  HasNext: boolean;
  NextPage: string;
  PreviousPage: string;
}

export interface Payload {
  error?: AnyError;
  invoice?: InvoiceDetails;
  invoices?: Invoice;
  invoicePagination?: Pagination;
}

export type Action =
  | ReturnType<typeof actions['getInvoices']>
  | ReturnType<typeof actions['getInvoicesSuccess']>
  | ReturnType<typeof actions['getInvoicesFailure']>
  | ReturnType<typeof actions['getInvoiceDetails']>
  | ReturnType<typeof actions['getInvoiceDetailsSuccess']>
  | ReturnType<typeof actions['getInvoiceDetailsFailure']>
  | ReturnType<typeof actions['postInvoiceEmail']>
  | ReturnType<typeof actions['postInvoiceEmailSuccess']>
  | ReturnType<typeof actions['postInvoiceEmailFailure']>
  | ReturnType<typeof actions['postInvoiceResetStatus']>
  | ReturnType<typeof actions['clearInvoiceApiState']>
  | ReturnType<typeof actions['watchGetInvoices']>
  | ReturnType<typeof actions['watchGetInvoiceDetails']>
  | ReturnType<typeof actions['watchPostInvoiceEmail']>;
