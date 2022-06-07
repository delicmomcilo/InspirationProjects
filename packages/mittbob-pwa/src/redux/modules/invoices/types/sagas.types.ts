import { get } from 'src/redux/request';
import * as actions from '../actions';

export type PostInvoiceEmailAsync = ReturnType<typeof actions['watchPostInvoiceEmail']>;
export type GetInvoicesAsync = ReturnType<typeof actions['watchGetInvoices']>;
export type GetInvoiceDetailsAsync = ReturnType<typeof actions['watchGetInvoiceDetails']>;
export type Response = ReturnType<typeof get>;
