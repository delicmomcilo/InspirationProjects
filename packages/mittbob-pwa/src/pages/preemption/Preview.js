import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Unhappy } from '@bob/core-components';
import { push } from 'connected-react-router';
import Preemption from '../apartments/Preemption';
import selectors from '../../redux/selectors';
import PATHS from '../../router/paths';
import Navigation from './Navigation';
import { FixedPriceWarning } from './preview/FixedPriceWarning'
import { reset } from '../../redux/modules/ui/preemption/shared/actions';

const Preview = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.preemption.loadingAllPreemptions);
  const preemption = useSelector(selectors.preemption.preemption(id));

  const handleCancel = () => {
    dispatch(reset());
    dispatch(push(PATHS.APARTMENTS))};
  const handleContinue = () => dispatch(push(PATHS.PREEMPTION_CONTACT_INFO.replace(':id', id)));

  if (loading) {
    return <Preemption loading />;
  }

  if (preemption == null) {
    return (
      <>
        <Unhappy
          title={t('Noe gikk galt...')}
          text={t('Kunne ikke hente bolig. Last inn siden på nytt for å prøve igjen.')}
        />
        <Navigation
          handleNextClick={handleContinue}
          handleBackClick={handleCancel}
          backButtonTitle={t('Avbryt')}
          nextButtonTitle={t('Sjekk din kontaktinfo')}
        />
      </>
    );
  }

  return (
    <>
      <Preemption id={id} hideActionButton expanded />
      {preemption.clarificationType === "ManagedFixedPrice" && <FixedPriceWarning />}
      <Navigation
        handleNextClick={handleContinue}
        handleBackClick={handleCancel}
        backButtonTitle={t('Avbryt')}
        nextButtonTitle={t('Sjekk din kontaktinfo')}
      />
    </>
  );
};

export default Preview;
