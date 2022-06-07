import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ModalDialog from '../../components/atomic/ModalDialog';
import { UMBRACO_PROPERTIES } from '../../redux/modules/umbraco/constants';
import { getUmbracoContent } from './helpers';

const PrivacyDeclaration = ({ modal, open, onClose }) => {
  const { t } = useTranslation();
  const privacyDeclaration = useSelector(
    ({ umbraco }) => umbraco[UMBRACO_PROPERTIES.PRIVACY_DECLARATION] || {},
  );

  if (modal) {
    return (
      <ModalDialog
        title={`${t('Personvernerklæring')}`}
        open={open}
        onClose={onClose}
        data-attr={UMBRACO_PROPERTIES.PRIVACY_DECLARATION}
      >
        {getUmbracoContent(privacyDeclaration)}
      </ModalDialog>
    );
  }

  return getUmbracoContent(privacyDeclaration);
};

export default PrivacyDeclaration;
