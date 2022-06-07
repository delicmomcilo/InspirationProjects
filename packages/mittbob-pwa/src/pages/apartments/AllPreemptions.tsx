import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import selectors from 'src/redux/selectors';
import { Grid, Typography, Unhappy } from '@bob/core-components';
import Preemption from './Preemption';
import { RootState } from '../../redux/rootState';
import PreemptionSortings from "./ApartmentsSortings";

const AllPreemptions: React.FC = () => {
  const { t } = useTranslation();
  const loadingAllPreemptions = useSelector(
    (state: RootState) => state.preemption.loadingAllPreemptions,
  );
  const getPreemptionsError = useSelector(selectors.preemption.getPreemptionsError);
  const sortedPreemptionIds = useSelector(selectors.ui.apartments.sortedPreemptionIds);
  const filteredPreemptionIds = useSelector(selectors.ui.apartments.filteredPreemptionIds);
  const activeFilters = useSelector(selectors.ui.apartments.activeFilters);

  if (loadingAllPreemptions) {
    return (
      <>
        <Grid item xs={12}>
          <Typography size="x-large" color="light-grey" component="h2">
            {t('Boliger')}
          </Typography>
        </Grid>
        <Preemption loading />
        <Preemption loading />
        <Preemption loading />
      </>
    );
  }

  if (getPreemptionsError) {
    return (
      <Unhappy
        iconName="Warning"
        title={t('Noe gikk galt...')}
        text={t('Kunne ikke hente boliger. Last inn siden på nytt for å prøve igjen.')}
      />
    );
  }

  const preemptionIds = Object.values(activeFilters).every(filters => filters.size === 0)
    ? sortedPreemptionIds
    : sortedPreemptionIds.filter(preemptionId => filteredPreemptionIds.has(preemptionId));

  if (!preemptionIds.length) {
    return (
      <Unhappy
        iconName="Search"
        title={t('Finner ingen boliger')}
        text={t(
          'Det er ingen boliger som passer søket ditt. Prøv å endre dine filtre eller kom tilbake senere.',
        )}
      />
    );
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography size="x-large" color="light-grey" component="h2">
          {t('Boliger')}
        </Typography>
      </Grid>
      <Grid item xs={12} alignItems="center" justifyContent="space-around">
        <PreemptionSortings />
      </Grid>
      {preemptionIds.map(preemptionId => (
        <React.Fragment key={preemptionId}>
          <Preemption id={preemptionId} />
        </React.Fragment>
      ))}
    </>
  );
};

export default AllPreemptions;
