import React from 'react';
import { Grid, Icon, Typography } from '@bob/core-components';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { push } from 'connected-react-router';
import BankID from '../../components/BankID';
import Navigation from './Navigation';
import { setError, setSuccess } from '../../redux/modules/ui/preemption/bankId/actions';
import { Error, Response } from '../../redux/modules/ui/preemption/bankId/types/actions';
import { RootState } from '../../redux/rootState';
import PATHS from '../../router/paths';

const BankId = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { error, response } = useSelector((state: RootState) => state.ui.preemption.bankId);
  const { preemption } = useSelector((state: RootState) => state.ui.preemption.shared);
  const { person } = useSelector((state: RootState) => state.person);
  const dateOfBirth = person?.dateOfBirth;
  const handleAuthenticateError = (e: Error): void => {
    dispatch(setError(e));
  };

  const handleAuthenticateSuccess = (res: Response): void => {
    dispatch(setSuccess(res));
  };

  const handlePreviousStep = (): void => {
    history.goBack();
  };

  const handleNextStep = (): void => {
    // eslint-disable-next-line camelcase
    if (response?.access_token && preemption?.id) {
      dispatch(push(PATHS.PREEMPTION_SUMMARY.replace(':id', preemption.id)));
    }
  };

  let birthdateError;

  if (response) {
    const [year, month, day] = response.parsedIdToken.birthdate.split('-');
    if(dateOfBirth) {
      const birthDate = new Date(dateOfBirth);
      if (year !== birthDate.getFullYear().toString() 
        || birthDate.getDate().toString() !== day 
        || (birthDate.getMonth() + 1).toString() !== month) {
        birthdateError = true;
      }
    }
  }

  return (
    <Grid item xs={12}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography
            textAlign="center"
            fontWeight="bold"
            size="x-large"
            color="violet"
            gutterBottom
          >
            {t('Bekreft med BankID')}
          </Typography>
        </Grid>
        {response && (
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item>
                <Icon
                  size="x-large"
                  name={error || birthdateError ? 'Warning' : 'Check'}
                  color={error || birthdateError ? 'warning' : 'primary'}
                />
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  {!error && !birthdateError && (
                    <>
                      <Grid item>
                        <Typography size="x-large" color="violet">
                          {t('Godkjent')}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{t('Du kan nå gå videre til oppsummering.')}</Typography>
                      </Grid>
                    </>
                  )}
                  {birthdateError && (
                    <>
                      <Grid item>
                        <Typography size="x-large" color="rosso">
                          {t('Feil fødselsdato fra Bank ID')}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>
                          {t('Fødselsdatoen fra BankID er ikke lik den du er logget inn med.')}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>
                          {t('Kontroller fødselsdatoen din eller kontakt kundeservice.')}
                        </Typography>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
        {!response && (
          <Grid item>
            <BankID
              onAuthenticateError={handleAuthenticateError}
              onAuthenticateSuccess={handleAuthenticateSuccess}
            />
          </Grid>
        )}
        <Navigation
          handleBackClick={handlePreviousStep}
          handleNextClick={handleNextStep}
          backButtonTitle={t('Forrige')}
          nextButtonTitle={t('Oppsummering')}
          disableNext={!response || !!birthdateError}
        />
      </Grid>
    </Grid>
  );
};

export default BankId;
