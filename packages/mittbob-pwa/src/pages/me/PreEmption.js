import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ModalDialog from '../../components/atomic/ModalDialog';
import { UMBRACO_PROPERTIES } from '../../redux/modules/umbraco/constants';
import { getUmbracoContent } from './helpers';

const PreEmptionInfo = ({ modal, open, onClose }) => {
  const { t } = useTranslation();
  const faq = useSelector(
    ({ umbraco }) => umbraco[UMBRACO_PROPERTIES.PRE_EMPTION_INFO] || {},
  );

  if (modal) {
    return (
      <ModalDialog
        title={`${t('Forkjøpsrett')}`}
        open={open}
        onClose={onClose}
        data-attr={UMBRACO_PROPERTIES.PRE_EMPTION_INFO}
      >
        {getUmbracoContent(faq)}
      </ModalDialog>
    );
  }

  return getUmbracoContent(faq);
};

export default PreEmptionInfo;
