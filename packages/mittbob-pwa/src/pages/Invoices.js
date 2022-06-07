import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, useRouteMatch, Link, useHistory, useLocation } from 'react-router-dom';
import moment from 'moment';
import { push } from 'connected-react-router';
import {
  Buttons,
  CalendarIcon,
  NoInvoices,
  InvoiceDetails,
  InvoiceList,
  Component,
  StyledInvoiceIcon,
  NoInvoicesHeader,
  NoInvoicesBody,
  NoInvoiceTextSection,
  IconWrapper,
  YearHeader,
} from './invoices/invoices.styles';
import Loader from './invoices/Loader';
import { watchGetInvoices, clearInvoiceApiState } from '../redux/modules/invoices/actions';
import { List, Button } from '../components/atomic';
import { getSubtitle, isForeclosed, isOverdue, isPayed, getMainTitle } from './invoices/helpers';
import NavigationHeader from '../components/atomic/NavigationHeader';
import Details from './invoices/Details';
import RouteWithSubRoutes from '../router/RouteWithSubRoutes';
import {
  setScrollPos,
  setInvoiceBars,
  clearInvoiceUiState,
} from '../redux/modules/ui/invoices/actions';
import { numberFormat } from '../helpers';
import PATHS from '../router/paths';
import { useMedia } from '../app/app.styles';

const Invoices = ({ routes }) => {
  const match = useRouteMatch();
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();
  const refInvoices = useRef();
  const refContainer = useRef();

  const loading = useSelector(({ invoices }) => invoices.loadingList);

  const invoices = useSelector(({ invoices: data }) => data.invoices);

  const pagination = useSelector(({ invoices: { invoicePagination } }) => invoicePagination);

  const scrollPosition = useSelector(
    ({
      ui: {
        invoices: { scrollPosition: scrollPos },
      },
    }) => scrollPos || 0,
  );

  const isBarsLoaded = useSelector(
    ({
      ui: {
        invoices: { barsLoaded },
      },
    }) => barsLoaded,
  );

  const { isMobile } = useMedia();

  useEffect(() => {
    dispatch(watchGetInvoices(1));
  }, [dispatch]);

  useEffect(() => {
    !isBarsLoaded && invoices.length > 0 && dispatch(setInvoiceBars(invoices));
  }, [dispatch, invoices, isBarsLoaded]);

  useEffect(() => {
    const handleScroll = e => {
      e.target === refInvoices.current &&
        isMobile &&
        dispatch(
          setScrollPos(refContainer.current ? refContainer.current.getBoundingClientRect().top : 0),
        );
    };

    window.addEventListener('scroll', handleScroll, true);
    return () => {
      dispatch(clearInvoiceApiState());
      dispatch(clearInvoiceUiState());
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [dispatch, isMobile]);

  useEffect(() => {
    if (refInvoices.current) {
      refInvoices.current.scrollTo(0, Math.abs(scrollPosition));
    }
    // Ignore scrollPosition as a dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location]);

  const invoiceListPagination = useSelector(
    ({ invoices: { invoicePagination } }) => invoicePagination,
  );

  const handleClick = () => {
    dispatch(watchGetInvoices(pagination.CurrentPage + 1));
  };

  const goBack = () =>
    dispatch(
      push(
        `/${match.path
          .split('/')
          .slice(0, -1)
          .join('/')}`,
      ),
    );

  useEffect(() => {
    if (invoices.length > 0 && !isMobile) {
      dispatch(push(PATHS.INVOICES_INVOICE.replace(':id', invoices[0].id)));
    }
  }, [history, invoices, isMobile]);

  if (!match.isExact && isMobile) {
    return (
      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </Switch>
    );
  }

  const renderList = () => {
    const output = [];
    let currentYear = 0;

    invoices.forEach(invoice => {
      if (currentYear !== moment(invoice.dueDate).format('YYYY')) {
        currentYear = moment(invoice.dueDate).format('YYYY');
        output.push(
          <YearHeader key={currentYear}>
            <h2>{currentYear}</h2>
          </YearHeader>,
        );
      }

      output.push(
        <List.ItemLink
          as={Link}
          key={`invoice_list_item_${invoice.id}`}
          to={PATHS.INVOICES_INVOICE.replace(':id', invoice.id)}
          icon={<CalendarIcon />}
          selected={location.pathname === PATHS.INVOICES_INVOICE.replace(':id', invoice.id)}
          success={isPayed(invoice)}
          warning={isOverdue(invoice) || isForeclosed(invoice)}
          title={getMainTitle(t, invoice)}
          subtitle={getSubtitle(t, invoice)}
          text={numberFormat(invoice.sumOriginalAmount)}
        />,
      );
    });
    return output;
  };

  return (
    <NavigationHeader
      title={t('Faktura')}
      onClick={goBack}
      backButtonTitle={t('Tilbake')}
      ref={refInvoices}
    >
      <Component loading={loading ? 'true' : undefined}>
        {invoices.length > 0 ? (
          <>
            <InvoiceList ref={refContainer}>
              <List>{renderList()}</List>
              <Buttons>
                {invoiceListPagination && invoiceListPagination.HasNext && (
                  <Button onClick={handleClick}>{t('Last inn flere')}</Button>
                )}
              </Buttons>
            </InvoiceList>

            <InvoiceDetails>
              <Switch>
                {routes.map(route => (
                  <RouteWithSubRoutes key={route.path} {...route} />
                ))}
              </Switch>
            </InvoiceDetails>
          </>
        ) : (
          <>
            {loading ? (
              <Loader />
            ) : (
              <NoInvoices>
                <IconWrapper>
                  <StyledInvoiceIcon />
                </IconWrapper>

                <NoInvoiceTextSection>
                  <NoInvoicesHeader>{t('Ingen fakturaer her.')}</NoInvoicesHeader>
                  <NoInvoicesBody>
                    {t(
                      'Etterhvert som BOB eller boligselskapet ditt sender ut regninger, vil de dukke opp her.',
                    )}
                  </NoInvoicesBody>
                </NoInvoiceTextSection>
              </NoInvoices>
            )}
          </>
        )}
      </Component>
    </NavigationHeader>
  );
};

Invoices.Pages = {
  Details,
};

Invoices.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Invoices;
