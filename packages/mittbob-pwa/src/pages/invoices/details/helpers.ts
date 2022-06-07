import moment from 'moment';
import { TFunction, TFunctionResult } from 'i18next';
import { isForeclosed, isOverdue, isPayed } from '../helpers';
import { Invoice } from '../../../redux/modules/invoices/types';

export const getVariant = (invoice: Invoice): string => {
  if (isPayed(invoice)) return 'regular';
  if (isOverdue(invoice) || isForeclosed(invoice)) return 'warning';
  return 'blank';
};

export const getStatus = (t: TFunction, invoice: Invoice): TFunctionResult => {
  if (isPayed(invoice))
    return t('Status PAYED', {
      date: moment(invoice.dueDate).format('Do MMMM'),
    });
  if (isOverdue(invoice))
    return t('Status OVERDUE', {
      date: moment(invoice.dueDate).format('D. MMMM'),
    });
  if (isForeclosed(invoice))
    return t('Status FORECLOSED', {
      date: moment(invoice.dateBblDebtCollection).format('Do MMMM'),
    });
  return t('Status DUE', { date: moment(invoice.dueDate).format('Do MMMM') });
};
