import { Selectors } from './types/selectors.types';

const selectors: Selectors = {
  invoiceBars: state => state.ui.invoices.invoiceBars,
  currentInvoice: state => state.ui.invoices.currentInvoice,
};

export default selectors;
