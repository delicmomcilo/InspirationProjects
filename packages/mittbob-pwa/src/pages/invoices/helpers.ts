import moment from 'moment';
import { TFunction, TFunctionResult } from 'i18next';
import { Invoice } from '../../redux/modules/invoices/types';

export const isForeclosed = ({ statusBblDebtCollection, sumUnpaidAmount }: Invoice): boolean =>
  statusBblDebtCollection === 'Oversendt BBL Inkasso' && sumUnpaidAmount > 0;
export const isOverdue = ({ dueDate, sumUnpaidAmount }: Invoice): boolean =>
  sumUnpaidAmount > 0 && moment(dueDate).isBefore(moment());
export const isPayed = ({ sumUnpaidAmount }: Invoice): boolean => sumUnpaidAmount === 0;
const upperFirst = (title: string): string => title.charAt(0).toUpperCase() + title.slice(1);

export const getMainTitle = (t: TFunction, invoice: Invoice): string =>
  `${t(invoice.invoiceTypeDescription)} ${upperFirst(
    moment(invoice.invoiceDate).format('MMM YYYY'),
  )}`;

export const getSubtitle = (t: TFunction, invoice: Invoice): TFunctionResult => {
  if (isPayed(invoice))
    return t('Betalt ', {
      date: moment(invoice.dueDate).format('D. MMMM'),
    });

  if (isOverdue(invoice))
    return t('Forfalt ', {
      date: moment(invoice.dueDate).format('D. MMMM'),
    });
  if (isForeclosed(invoice)) return t('Ikke betalt, til inkasso');
  return t('Forfaller ', {
    date: moment(invoice.dueDate).format('D. MMMM'),
  });
};

// export const groupBy = (items, key) =>
//   items.reduce(
//     (result, item) => ({
//       ...result,
//       [key(item)]: [...(result[key(item)] || []), item],
//     }),
//     {},
//   );

// export default getSubtitle;
