import reducer, { initialState } from '../reducer';
import { SET_SCROLL_POS, CLEAR_INVOICE_UI_STATE, SET_INVOICES_BARS } from '../constants';
import { setScrollPos, clearInvoiceUiState, setInvoiceBars } from '../actions';

describe('modules/ui/invoices/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it(`should handle ${CLEAR_INVOICE_UI_STATE}`, () => {
    expect(reducer(initialState, clearInvoiceUiState())).toEqual({
      ...initialState,
    });
  });
});

describe('modules/ui/invoices/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  const scrollpos = 0;
  it(`should handle ${SET_SCROLL_POS}`, () => {
    expect(reducer(initialState, setScrollPos(scrollpos))).toEqual({
      ...initialState,
      scrollPosition: scrollpos,
    });
  });
});

describe('modules/ui/invoices/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  const invoiceBars = [];
  it(`should handle ${SET_INVOICES_BARS}`, () => {
    expect(reducer(initialState, setInvoiceBars(invoiceBars))).toEqual({
      ...initialState,
      invoiceBars,
      barsLoaded: true,
    });
  });
});
