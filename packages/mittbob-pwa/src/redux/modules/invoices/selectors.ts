import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
  invoiceDetailsMap: state => state.invoices.invoiceDetails,
  invoiceDetailsWithId: id => state => state.invoices.invoiceDetails[id],
  loadingDetails: state => state.invoices.loadingDetails,
};

export default selectors;
