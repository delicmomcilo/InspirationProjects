import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Unhappy } from '@bob/core-components';
import selectors from 'src/redux/selectors';
import moment from 'moment';
import Preemption from './Preemption';
import { RootState } from '../../redux/rootState';
import { Interest } from '../../redux/modules/preemption/types';

const MyPreemptions: React.FC = () => {
  const { t } = useTranslation();
  const loading = useSelector((state: RootState) => state.preemption.loadingMyInterests);
  const getMyPreemptionsError = useSelector(selectors.preemption.getMyPreemptionsError);
  const getMyInterestsError = useSelector(selectors.preemption.getMyInterestsError);
  const preemptionIds = useSelector(selectors.preemption.interestKeys);
  const allPreemptions = useSelector((s: RootState) => s.preemption.allPreemptions);
  const myInterestRecords = useSelector(selectors.preemption.interests);
  const myInterests = Object.values(myInterestRecords);

  if (loading) {
    return (
      <>
        <Grid item xs={12}>
          <Typography size="x-large" color="light-grey" component="h2">
            {t('Mine meldte forkjøp')}
          </Typography>
        </Grid>
        <Preemption loading />
      </>
    );
  }
  if (getMyPreemptionsError || getMyInterestsError) {
    return (
      <Unhappy
        iconName="Warning"
        title={t('Noe gikk galt...')}
        text={t('Kunne ikke hente meldte forkjøp. Last inn siden på nytt for å prøve igjen.')}
      />
    );
  }

  if (!preemptionIds.length) {
    return (
      <Unhappy
        iconName="Document"
        title={t('Du har ingen meldte forkjøp')}
        text={t('Finn boliger og meld forkjøp på de du ønsker, så dukker de opp her.')}
      />
    );
  }

  const isPastDeadline = ({ preemptionId }: Interest): boolean => {
    const d = allPreemptions[preemptionId]?.deadline;
    if (d) {
      return moment().isAfter(moment(d));
    }
    return false;
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography size="x-large" color="light-grey" component="h2">
          {t('Mine meldte forkjøp')}
        </Typography>
      </Grid>
      {myInterests
        .filter(interest => !isPastDeadline(interest))
        .map(interest => (
          <React.Fragment key={interest.preemptionId}>
            <Preemption id={interest.preemptionId} />
          </React.Fragment>
        ))}
      <Grid item xs={12}>
        <Typography size="large" color="light-grey" component="h2">
          {t('Tidligere meldte forkjøp')}
        </Typography>
      </Grid>
      {myInterests
        .filter(interest => isPastDeadline(interest))
        .map(interest => (
          <React.Fragment key={interest.preemptionId}>
            <Preemption disabled id={interest.preemptionId} />
          </React.Fragment>
        ))}
    </>
  );
};

export default MyPreemptions;
