import { Invoice, InvoiceDetails, InvoiceId as Id } from '.';
import { Pagination } from './reducer.types';

export type InvoicePagination = Pagination;
export type Invoices = { invoicePagination: Pagination; invoices: Array<Invoice> };
export type Details = { invoice: InvoiceDetails };
export type Error = { error: AnyError };
export type InvoiceId = Id;
export type Email = string;
