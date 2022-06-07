import React, { FormEvent, useState }  from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Button, Input } from '@bob/core-components';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { useFeatureFlags } from '../app/helpers';
import ModalDialog from './ModalDialog';
import { RootState } from '../redux/rootState';
import { save, updatePreferences, setProfileErrors, abort } from '../redux/modules/ui/confirmContactInfo/actions';
import selectors from '../redux/selectors';
import validate from '../pages/me/profile/validation';
import PreferenceContent from './PreferenceContent';
import { Form } from '../pages/me/profile/profile.styles'

const ConfirmContactInfoDialog = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const show = useSelector((state: RootState) => state.ui.confirmContactInfo.show);
  const { profileErrors } = useSelector(selectors.ui.confirmContactInfo.get);
  const { person  } = useSelector((state: RootState) => state.person);
  const { preferenceChanges } = useSelector((state: RootState) => state.ui.confirmContactInfo);
  const loading = useSelector((state: RootState) => state.ui.confirmContactInfo.loading);
  const changes = preferenceChanges;

  const [email, setEmail] = useState(person?.email);
  const [mobile, setMobile] = useState(person?.mobile);

  const preferenceError = useSelector((state: RootState) => state.ui.confirmContactInfo.preferenceError);
  
  const handleAbort = (): void => {
    dispatch(abort());
  };

  const handleEmailChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value)
  };

  const handleMobileChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    setMobile(e.currentTarget.value)
  };
  const handleOnSave = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const err = validate({ mail: email, mobile }, t);
    
    if (err) {
      const error = {...err, email: err.mail };
      dispatch(setProfileErrors({ errors: error }));
    } else {
      dispatch(setProfileErrors({ errors: {} }));
      dispatch(save({ email, mobile }));
    } 
  };

  return (
    <ModalDialog open={show}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography size="x-large" fontWeight="600" color="violet">
            {t('CONFIRM_CONTACTINFO_HEADER')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{t('CONFIRM_CONTACTINFO_INFO')}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Form onSubmit={handleOnSave} id="my-form">
            <Grid container alignItems="center" spacing={2}>
              <Grid xs={3} md={4} lg={5} item>
                <Typography fontWeight="600">{`${t('E-post')}:`}</Typography>
              </Grid>
              <Grid xs={9} md={8} lg={7} item>
                {!person || loading ? (
                  <Skeleton />
                ) : (
                  <Input
                    onChange={handleEmailChange}
                    value={email}
                    defaultValue={person?.email}
                    error={profileErrors?.email?.message}
                  />
                )}
              </Grid>
              <Grid xs={3} md={4} lg={5} item>
                <Typography fontWeight="600">{`${t('Telefon')}:`}</Typography>
              </Grid>
              <Grid xs={9} md={8} lg={7} item>
                {!person || loading ? (
                  <Skeleton />
                ) : (
                  <Input
                    onChange={handleMobileChange}
                    value={mobile}
                    defaultValue={person?.mobile}
                    error={profileErrors?.mobile?.message}
                  />
                )}
              </Grid>
            </Grid>
          </Form>
        </Grid>
        <PreferenceContent updatePreferences={updatePreferences} preferenceChanges={changes} loading={loading}/>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            {preferenceError && (
              <Grid item>
                <Button
                  type="button"
                  arrowPosition="left"
                  disabled={loading}
                  onClick={handleAbort}
                >
                  {t('Avbryt')}
                </Button>
              </Grid>
            )}
            <Grid item>
              <Button loading={loading} onClick={handleOnSave}>
                {t('Lagre')}
              </Button>
            </Grid>
            {preferenceError && (
              <Grid item xs={12}>
                <Typography textAlign="end" color="rosso" size="x-small">
                  {t('Noe gikk galt')}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </ModalDialog>
  );
};

const FeatureWrapper = (): JSX.Element => {
  const { confirmContactInfoDialog } = useFeatureFlags();
  if (confirmContactInfoDialog) return <ConfirmContactInfoDialog />;
  return <></>;
};

export default FeatureWrapper;