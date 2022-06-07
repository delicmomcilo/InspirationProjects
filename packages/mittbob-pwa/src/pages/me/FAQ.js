import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ModalDialog from '../../components/atomic/ModalDialog';
import { UMBRACO_PROPERTIES } from '../../redux/modules/umbraco/constants';
import { getUmbracoContent } from './helpers';

const FAQ = ({ modal, open, onClose }) => {
  const { t } = useTranslation();
  const faq = useSelector(
    ({ umbraco }) => umbraco[UMBRACO_PROPERTIES.FAQ] || {},
  );

  if (modal) {
    return (
      <ModalDialog
        title={`${t('Ofte stilte spørsmål')}`}
        open={open}
        onClose={onClose}
        data-attr={UMBRACO_PROPERTIES.FAQ}
      >
        {getUmbracoContent(faq)}
      </ModalDialog>
    );
  }

  return getUmbracoContent(faq);
};

export default FAQ;
