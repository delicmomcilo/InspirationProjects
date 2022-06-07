import { RootState } from 'src/redux/rootState';
import { State } from './reducer.types';
import { InvoiceDetails, InvoiceId } from '.';

export interface Selectors {
  invoiceDetailsMap: (state: RootState) => State['invoiceDetails'];
  invoiceDetailsWithId: (id: InvoiceId) => (state: RootState) => InvoiceDetails;
  loadingDetails: (state: RootState) => State['loadingDetails'];
}
