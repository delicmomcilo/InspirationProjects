import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import {
  Component,
  InvoiceLine,
  InvoiceLineText,
  Amount,
  Header,
} from './invoiceHeader/invoiceHeader.styles';
import { getMainTitle } from '../helpers';
import { numberFormat } from '../../../helpers';
import { IProps } from './invoiceHeader/invoiceHeader.types';

const InvoiceHeader: React.FC<IProps> = ({ invoice }) => {
  const { t } = useTranslation();
  const { invoiceDate } = invoice;

  const from = moment(invoiceDate)
    .startOf('month')
    .format('Do MMMM');
  const to = moment(invoiceDate)
    .endOf('month')
    .format('Do MMMM');

  return (
    <Component>
      <Header>{`${from} - ${to}`}</Header>
      <InvoiceLine>
        <InvoiceLineText>{getMainTitle(t, invoice)}</InvoiceLineText>
        <Amount>{numberFormat(invoice.sumOriginalAmount)}</Amount>
      </InvoiceLine>
    </Component>
  );
};

export default InvoiceHeader;
