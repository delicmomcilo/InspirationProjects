import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';
import { isForeclosed, isOverdue, isPayed } from '../helpers';
import { LowButton } from './details.styles';
import { Component, StatusText, StatusWrapper } from './invoiceStatus/invoiceStatus.styles';
import { Icon } from '../../../components/atomic';
import { getStatus } from './helpers';

const handlePayClick = e => {
  window.open(e.currentTarget.getAttribute('data-href'), '_blank');
};

const renderStatus = (invoice, iconName, color, additionalMarkup, t) => {
  return (
    <>
      <StatusWrapper>
        <Icon name={iconName} color={color} />
        <StatusText invoice={invoice}>{getStatus(t, invoice)}</StatusText>
      </StatusWrapper>
      {additionalMarkup}
    </>
  );
};

const InvoiceStatus = ({ invoice }) => {
  const { t } = useTranslation();

  let content = renderStatus(invoice, 'Calendar', '', null, t);

  if (isPayed(invoice)) {
    content = renderStatus(invoice, 'Check', 'success', null, t);
  } else if (isForeclosed(invoice)) {
    content = renderStatus(
      invoice,
      'Warning',
      'warning',
      <div>
        <LowButton
          role="link"
          onClick={handlePayClick}
          data-href="https://customerweb.spn.no/BBLFinans/Infocenter"
          variant="primary"
        >
          {t('Betal inkasso her')}
        </LowButton>
      </div>,
      t,
    );
  } else if (isOverdue(invoice)) {
    content = renderStatus(invoice, 'Warning', 'warning', null, t);
  }
  return <Component invoice={invoice}>{content}</Component>;
};

InvoiceStatus.propTypes = {
  invoice: PropTypes.shape({
    sumUnpaidAmount: PropTypes.number,
    invoiceTypeId: PropTypes.string,
    dueDate: PropTypes.string,
  }).isRequired,
};

export default InvoiceStatus;
