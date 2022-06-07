import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Switch, Typography, Button } from '@bob/core-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootState';
import { save, update, init } from '../../redux/modules/ui/me/preferencesAuth0/actions';
import { Container } from './preferences/preferences.styles';
import PreferenceContent from '../../components/PreferenceContent';

const Preferences = (): JSX.Element => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init())
  }, [dispatch])


  const changes = useSelector((state: RootState) => state.ui.me.preferencesAuth0.changes);
  const error = useSelector((state: RootState) => state.ui.me.preferencesAuth0.error);
  const loading = useSelector((state: RootState) => state.ui.me.preferencesAuth0.loading);

  const handleOnSave = (): void => {
    dispatch(save());
  };

  return (
    <Container container spacing={2}>
      <Grid item xs={12}>
        <Typography size="x-large" fontWeight="bold" color="violet">
          {t('ME_PREFERENCES_HEADER')}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={12}>
                <Typography fontWeight="600">{t('IMPORTANT_INFO')}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="black">
                  {t('IMPORTANT_INFO_CAPTION')}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Switch disabled value="on" />
          </Grid>
        </Grid>
      </Grid>
      <PreferenceContent updatePreferences={update} preferenceChanges={changes} loading={loading}/>
      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <Button loading={loading} onClick={handleOnSave}>
              {t('Lagre')}
            </Button>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography textAlign="end" color="rosso" size="x-small">
                {t('Noe gikk galt')}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Preferences;
