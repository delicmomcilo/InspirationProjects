import { SET_SCROLL_POS, SET_INVOICES_BARS, CLEAR_INVOICE_UI_STATE } from './constants';
import { InvoiceBars, ScrollPosition } from './types/actions.types';

export const setScrollPos = (pos: ScrollPosition) => ({ type: SET_SCROLL_POS, pos } as const);

export const setInvoiceBars = (invoiceBars: InvoiceBars) =>
  ({
    type: SET_INVOICES_BARS,
    invoiceBars,
  } as const);
export const clearInvoiceUiState = () => ({ type: CLEAR_INVOICE_UI_STATE } as const);
