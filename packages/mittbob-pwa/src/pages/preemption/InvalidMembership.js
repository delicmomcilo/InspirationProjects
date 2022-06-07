import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Unhappy } from '@bob/core-components';
import { NavigationButtons } from './preemption.styles';
import PATHS from '../../router/paths';

const InvalidMembership = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleCancel = () => dispatch(push(PATHS.APARTMENTS));
  const handleContinue = () => {}; // TODO: Add payment path

  return (
    <>
      <Unhappy
        iconName="Warning"
        title={t('Ugyldig medlemskap')}
        text={t('Medlemskapet må være betalt før du kan melde interesse om forkjøp')} // TODO: Get text from Umbraco
      />
      <NavigationButtons>
        <NavigationButtons.Cancel onClick={handleCancel}>{t('Avbryt')}</NavigationButtons.Cancel>
        <NavigationButtons.Continue onClick={handleContinue}>
          {t('Gå til betaling')}
        </NavigationButtons.Continue>
      </NavigationButtons>
    </>
  );
};

export default InvalidMembership;
