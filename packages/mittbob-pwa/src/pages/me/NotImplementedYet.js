import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ModalDialog from '../../components/atomic/ModalDialog';
import { UMBRACO_PROPERTIES } from '../../redux/modules/umbraco/constants';
import { getUmbracoContent } from './helpers';

const NotImplementedYet = ({ modal, open, onClose }) => {
  const { t } = useTranslation();
  const faq = useSelector(
    ({ umbraco }) => umbraco[UMBRACO_PROPERTIES.NOT_IMPLEMENTED_YET] || {},
  );

  if (modal) {
    return (
      <ModalDialog
        title={`${t('Under arbeid')}`}
        open={open}
        onClose={onClose}
        data-attr={UMBRACO_PROPERTIES.NOT_IMPLEMENTED_YET}
      >
        {t('Denne tjenesten vil bli lansert på et senere tidspunkt')}
      </ModalDialog>
    );
  }

  return getUmbracoContent(faq);
};

export default NotImplementedYet;
