import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ModalDialog from '../../components/atomic/ModalDialog';
import { UMBRACO_PROPERTIES } from '../../redux/modules/umbraco/constants';
import { getUmbracoContent } from './helpers';

const MemberConditions = ({ modal, open, onClose }) => {
  const { t } = useTranslation();
  const memberConditions = useSelector(
    ({ umbraco }) => umbraco[UMBRACO_PROPERTIES.MEMBER_CONDITIONS] || {},
  );

  if (modal) {
    return (
      <ModalDialog
        title={`${t('Medlemsvilkår')}`}
        open={open}
        onClose={onClose}
        data-attr={UMBRACO_PROPERTIES.MEMBER_CONDITIONS}
      >
        {getUmbracoContent(memberConditions)}
      </ModalDialog>
    );
  }

  return getUmbracoContent(memberConditions);
};

export default MemberConditions;
