import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ModalDialog from '../../components/atomic/ModalDialog';
import { UMBRACO_PROPERTIES } from '../../redux/modules/umbraco/constants';
import { getUmbracoContent } from './helpers';

const Contact = ({ modal, open, onClose }) => {
  const { t } = useTranslation();
  const contactInfo = useSelector(
    ({ umbraco }) => umbraco[UMBRACO_PROPERTIES.CONTACT_INFO] || {},
  );

  if (modal) {
    return (
      <ModalDialog
        title={`${t('Kontakt')}`}
        open={open}
        onClose={onClose}
        data-attr={UMBRACO_PROPERTIES.CONTACT_INFO}
      >
        {getUmbracoContent(contactInfo)}
      </ModalDialog>
    );
  }

  return getUmbracoContent(contactInfo);
};

export default Contact;
