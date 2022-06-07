import { SET_SCROLL_POS, SET_INVOICES_BARS, CLEAR_INVOICE_UI_STATE } from './constants';
import { Action, State } from './types/reducer.types';

export const initialState = {
  scrollPosition: 0,
  currentInvoice: undefined,
  invoiceBars: [],
  barsLoaded: false,
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    // case SET_QUERY:
    //   return { ...state, query };
    case SET_SCROLL_POS:
      return { ...state, scrollPosition: action.pos };
    case SET_INVOICES_BARS:
      return {
        ...state,
        invoiceBars: action.invoiceBars,
        barsLoaded: true,
      };
    case CLEAR_INVOICE_UI_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
