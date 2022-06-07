import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import selectors from 'src/redux/selectors';
import { Grid, Typography, Unhappy } from '@bob/core-components';
import Preemption from './Preemption';
import { RootState } from '../../redux/rootState';

const Favorites: React.FC = () => {
  const { t } = useTranslation();
  const loadingConfiguration = useSelector(selectors.person.loading);
  const getConfigurationError = useSelector(selectors.person.getConfigurationError);
  const loadingPreemptions = useSelector(
    (state: RootState) => state.preemption.loadingMyPreemptions,
  );
  const getPreemptionsError = useSelector(selectors.preemption.getPreemptionsError);
  const preemptionIds = useSelector(selectors.person.favoriteList);

  if (loadingConfiguration || loadingPreemptions) {
    return (
      <>
        <Grid item xs={12}>
          <Typography size="x-large" color="light-grey" component="h2">
            {t('Favoritter')}
          </Typography>
        </Grid>
        <Preemption loading />
      </>
    );
  }

  if (getConfigurationError || getPreemptionsError) {
    return (
      <Unhappy
        iconName="Warning"
        title={t('Noe gikk galt...')}
        text={t('Kunne ikke hente favoritter. Last inn siden på nytt for å prøve igjen.')}
      />
    );
  }

  if (!preemptionIds.length) {
    return (
      <Unhappy
        iconName="Heart"
        title={t('Du har ingen favoritter')}
        text={t('Finn boliger du liker og trykk på hjertet for å large som favoritt')}
      />
    );
  }
  return (
    <>
      <Grid item xs={12}>
        <Typography size="x-large" color="light-grey" component="h2">
          {t('Favoritter')}
        </Typography>
      </Grid>
      {preemptionIds.map(preemptionId => (
        <React.Fragment key={preemptionId}>
          <Preemption id={preemptionId} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Favorites;
