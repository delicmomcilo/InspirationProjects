import React, { useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { push } from 'connected-react-router';
import NavigationHeader from '../../components/atomic/NavigationHeader';
import { InvoiceHeader, InvoiceStatus } from './details/';
import {
  StyledBarDiagram,
  Component,
  FlexMaxWidthRow,
  Item,
  SumItem,
  MainPartWrapper,
  InvoiceEmailWrapper,
} from './details/details.styles';
import { getVariant } from './details/helpers';
import { watchGetInvoiceDetails } from '../../redux/modules/invoices/actions';
import { List } from '../../components/atomic';
import { numberFormat } from '../../helpers';
import InvoiceEmail from './details/InvoiceEmail';
import Loader from './details/Loader';
import PATHS from '../../router/paths';
import selectors from '../../redux/selectors';

const Details = () => {
  const { t } = useTranslation();
  const match = useRouteMatch<{ id: string }>();
  const dispatch = useDispatch();
  const id = parseInt(match.params.id, 10);
  const topInvoices = useSelector(selectors.ui.invoices.invoiceBars);
  const invoiceDetailsList = useSelector(selectors.invoices.invoiceDetailsMap);
  const currentInvoice = useSelector(selectors.invoices.invoiceDetailsWithId(id));

  useEffect(() => {
    if (!invoiceDetailsList[id]) dispatch(watchGetInvoiceDetails(id));
  }, [dispatch, invoiceDetailsList, id]);

  const loading = useSelector(selectors.invoices.loadingDetails);

  const invoices = [...topInvoices];

  const bars = invoices.reverse().map(i => {
    const variant = getVariant(i);
    const bar = {
      id: i.id,
      value: i.sumOriginalAmount,
      displayValue: numberFormat(i.sumOriginalAmount),
      label: moment(i.invoiceDate).format('MMM'),
      variant,
      // icon: getVariant(i) === 'blank' && <CalendarIcon />,
      success: variant === 'regular',
      warning: variant === 'warning',
    };
    return bar;
  });

  const handleBarClick = (e: Event): void => {
    const { dataset = {} } = e.target as HTMLButtonElement;
    const { index } = dataset;
    if (index) {
      const { id } = invoices[parseInt(index, 10)];
      dispatch(push(PATHS.INVOICES_INVOICE.replace(':id', id.toString())));
    }
  };

  const goBack = () =>
    dispatch(
      push(
        `${match.path
          .split('/')
          .slice(0, -1)
          .join('/')}`,
      ),
    );
  return (
    <NavigationHeader title={t('Fakturadetaljer')} onClick={goBack} backButtonTitle={t('Tilbake')}>
      <FlexMaxWidthRow>
        <Component>
          {currentInvoice && !loading ? (
            <>
              <InvoiceStatus invoice={currentInvoice} />
              <MainPartWrapper>
                <InvoiceHeader invoice={currentInvoice} />

                <List>
                  <Item title={t('Spesifisert faktura')} />
                  {currentInvoice.invoiceLines.map(line => (
                    <Item
                      dense
                      key={`invoice_detail_line_item_${line.id}`}
                      title={line.lineText}
                      text={numberFormat(line.amount)}
                    />
                  ))}
                  <SumItem
                    dense
                    title={t('Sum')}
                    text={numberFormat(currentInvoice.sumOriginalAmount)}
                  />
                </List>
                <List>
                  <Item title={t('Betalingsdetaljer')} />
                  <Item
                    dense
                    title={t('Å betale')}
                    text={numberFormat(currentInvoice.sumOriginalAmount)}
                  />
                  <Item dense title={t('Betales til')} text={currentInvoice.clientName} />
                  <Item
                    dense
                    title={t('Leveringsmetode')}
                    text={currentInvoice.invoiceDeliveryType}
                  />
                  {currentInvoice.invoiceTypeId !== 'M' && (
                    <Item dense title={t('Faktura Nr.')} text={`${currentInvoice.invoiceNo}`} />
                  )}
                  <Item dense title={t('KID nr')} text={currentInvoice.customerIdentificationId} />
                  <Item
                    dense
                    title={t('Betales til konto')}
                    text={currentInvoice.bankAccountNumber}
                  />
                  <Item
                    dense
                    title={t('Forfall')}
                    text={moment(currentInvoice.dueDate).format('DD. MMMM YYYY')}
                  />
                </List>

                <InvoiceEmailWrapper>
                  <InvoiceEmail />
                </InvoiceEmailWrapper>
              </MainPartWrapper>
              <StyledBarDiagram
                list={bars}
                selectedIndex={invoices.findIndex(i => i.id === currentInvoice.id)}
                onClick={handleBarClick}
                size="medium"
              />
            </>
          ) : (
            <Loader />
          )}
        </Component>
      </FlexMaxWidthRow>
    </NavigationHeader>
  );
};

export default Details;
