import { RootState } from 'src/redux/rootState';
import * as types from '.';

export interface Selectors {
  invoiceBars: (state: RootState) => types.InvoiceBars;
  currentInvoice: (state: RootState) => types.CurrentInvoice | undefined;
}
