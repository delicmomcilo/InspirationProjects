import {
  GET,
  GET_SUCCESS,
  GET_FAILURE,
  GET_INVOICE_DETAILS,
  GET_INVOICE_DETAILS_FAILURE,
  GET_INVOICE_DETAILS_SUCCESS,
  POST_INVOICE_EMAIL_FAILURE,
  POST_INVOICE_EMAIL_SUCCESS,
  POST_INVOICE_EMAIL,
  POST_INVOICE_RESET_STATUS,
  CLEAR_INVOICE_API_STATE,
} from './constants';
import { Action, State } from './types/reducer.types';

export const initialState: State = {
  loadingDetails: true,
  sendingEmail: false,
  loadingList: true,
  invoices: [],
  invoiceDetails: {},
  successFulEmailSend: false,
  attemptedEmailSend: false,
  invoicePagination: {
    CurrentPage: 0,
    PageSize: 12,
    TotalPages: 0,
    TotalCount: 0,
    HasPrevious: false,
    HasNext: false,
    NextPage: '',
    PreviousPage: '',
  },
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return { ...state, loadingList: true };
    case GET_FAILURE:
      return { ...state, loadingList: false, error: action.payload.error };
    case GET_SUCCESS:
      return {
        ...state,
        invoices: [...state.invoices, ...action.payload.invoices],
        loadingList: false,
        invoicePagination: action.payload.invoicePagination,
      };
    case GET_INVOICE_DETAILS:
      return { ...state, loadingDetails: true };
    case GET_INVOICE_DETAILS_FAILURE:
      return { ...state, loadingDetails: false, error: action.payload.error };
    case GET_INVOICE_DETAILS_SUCCESS:
      return {
        ...state,
        loadingDetails: false,
        invoiceDetails: {
          ...state.invoiceDetails,
          [action.payload.invoice.id]: action.payload.invoice,
        },
      };
    case POST_INVOICE_EMAIL:
      return { ...state, sendingEmail: true };
    case POST_INVOICE_EMAIL_SUCCESS:
      return {
        ...state,
        sendingEmail: false,
        successFulEmailSend: true,
        attemptedEmailSend: true,
      };
    case POST_INVOICE_EMAIL_FAILURE:
      return {
        ...state,
        sendingEmail: false,
        successFulEmailSend: false,
        attemptedEmailSend: true,
        error: action.payload.error,
      };
    case POST_INVOICE_RESET_STATUS:
      return {
        ...state,
        successFulEmailSend: false,
        attemptedEmailSend: false,
      };
    case CLEAR_INVOICE_API_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
