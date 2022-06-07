import { SET_INVOICES_BARS, CLEAR_INVOICE_UI_STATE, SET_SCROLL_POS } from '../constants';
import { setInvoiceBars, clearInvoiceUiState, setScrollPos } from '../actions';

describe('modules/ui/invoices/actions', () => {
  it('setInvoiceBars', () => {
    const invoiceBars = [];
    expect(setInvoiceBars(invoiceBars)).toEqual({
      type: SET_INVOICES_BARS,
      invoiceBars,
    });
  });
});

describe('modules/ui/invoices/actions', () => {
  it('clearInvoiceUiState', () => {
    expect(clearInvoiceUiState()).toEqual({
      type: CLEAR_INVOICE_UI_STATE,
    });
  });
});

describe('modules/ui/invoices/actions', () => {
  it('setScrollPos', () => {
    const scrollpos = 0;
    expect(setScrollPos(scrollpos)).toEqual({
      type: SET_SCROLL_POS,
      pos: scrollpos,
    });
  });
});
