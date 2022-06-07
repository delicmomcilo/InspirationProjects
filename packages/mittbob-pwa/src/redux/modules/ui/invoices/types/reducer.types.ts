import * as actions from '../actions';
import * as types from '.';
import { InvoiceDetails } from '../../../invoices/types';

export interface State {
  scrollPosition: number;
  currentInvoice?: InvoiceDetails;
  invoiceBars: types.InvoiceBars;
  barsLoaded: boolean;
}

export type Action =
  | ReturnType<typeof actions['setScrollPos']>
  | ReturnType<typeof actions['setInvoiceBars']>
  | ReturnType<typeof actions['clearInvoiceUiState']>;
