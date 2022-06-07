import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ModalDialog from '../../components/atomic/ModalDialog';
import { UMBRACO_PROPERTIES } from '../../redux/modules/umbraco/constants';
import { getUmbracoContent } from './helpers';

const TermsAndConcepts = ({ modal, open, onClose }) => {
  const { t } = useTranslation();
  const termsAndConcepts = useSelector(
    ({ umbraco }) => umbraco[UMBRACO_PROPERTIES.TERMS_AND_CONCEPTS] || {},
  );

  if (modal) {
    return (
      <ModalDialog
        title={`${t('Ord og begreper')}`}
        open={open}
        onClose={onClose}
        data-attr={UMBRACO_PROPERTIES.TERMS_AND_CONCEPTS}
      >
        {getUmbracoContent(termsAndConcepts)}
      </ModalDialog>
    );
  }

  return getUmbracoContent(termsAndConcepts);
};

export default TermsAndConcepts;
