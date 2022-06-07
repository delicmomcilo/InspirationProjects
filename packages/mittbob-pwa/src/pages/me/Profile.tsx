import React, { FormEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid, Icon, Input, Typography } from '@bob/core-components';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from 'connected-react-router';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';
import { RootState } from '../../redux/rootState';
import {
  Container,
  TopIconGrid,
  XSHiddenGrid,
  Form,
  ButtonsContainer,
} from './profile/profile.styles';
import NavigationHeader from '../../components/atomic/NavigationHeader';
import { setEdit, setErrors, saveProfile } from '../../redux/modules/ui/me/profile/actions';
import selectors from '../../redux/selectors';
import validate from './profile/validation';

const Profile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>();
  const phoneRef = useRef<HTMLInputElement>();
  const { person, seniority, loading } = useSelector((state: RootState) => state.person);
  const memberNumber = person?.memberNumber !== 0 ? person?.memberNumber : null;
  const seniorityDate = seniority.seniorityDate !== undefined ? moment(seniority.seniorityDate).format('DD.MMMM YYYY') : null;
  const { edit, errors } = useSelector(selectors.ui.me.profile.get);
  const handleSetEdit = (): void => {
    dispatch(setEdit({ edit: !edit }));
  };
  const back = (): void => {
    dispatch(goBack());
  };

  const handleAbort = (): void => {
    dispatch(setErrors({ errors: {} }));
    handleSetEdit();
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const mobile = phoneRef.current?.value;
    const err = validate({ mail: email, mobile }, t);
   if (err) {
      const error = {...err, email: err.mail };
      dispatch(setErrors({ errors: error }));
    } else {
      dispatch(setErrors({ errors: {} }));
      handleSetEdit();
      dispatch(saveProfile({ email, mobile }));
    }
  };

  return (
    <NavigationHeader title={t('Min profil')} onClick={back} backButtonTitle={t('Tilbake')}>
      <Form onSubmit={handleSubmit} noValidate>
        <Container container spacing={2} justifyContent="flex-start">
          <Grid xs={12} item>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <TopIconGrid item>
                    <Icon name="Profile" size="xx-large" />
                  </TopIconGrid>
                </Grid>
              </Grid>
              <Grid xs={12} md={6} item>
                <Grid container spacing={2}>
                  <XSHiddenGrid item xs={12}>
                    <Typography color="violet" size="x-large">
                      {t('Min profil')}
                    </Typography>
                  </XSHiddenGrid>
                  <Grid xs={6} item>
                    <Typography fontWeight="bold">{`${t('Navn')}:`}</Typography>
                  </Grid>
                  <Grid xs={6} item>
                    {!person || loading ? (
                      <Skeleton />
                    ) : (
                      <Typography>{`${person?.firstName} ${person?.lastName}`}</Typography>
                    )}
                  </Grid>
                  <Grid xs={6} item>
                    <Typography fontWeight="bold">{`${t('Adresse')}:`}</Typography>
                  </Grid>
                  <Grid xs={6} item>
                    {!person || loading ? (
                      <Skeleton />
                    ) : (
                      <Typography>{person?.address?.line1}</Typography>
                    )}
                  </Grid>
                  <Grid xs={6} item>
                    <Typography fontWeight="bold">{`${t('Medlemsnr')}:`}</Typography>
                  </Grid>
                  <Grid xs={6} item>
                    {!person || loading ? (
                      <Skeleton />
                    ) : (
                      <Typography>{memberNumber}</Typography>
                    )}
                  </Grid>
                  <Grid xs={6} item>
                    <Typography fontWeight="bold">{`${t('Ansiennitetsdato')}:`}</Typography>
                  </Grid>
                  <Grid xs={6} item>
                    {!person || loading ? <Skeleton /> : <Typography>{seniorityDate}</Typography>}
                  </Grid>
                  <Grid xs={6} item>
                    <Typography fontWeight="bold">{`${t('Kjønn')}:`}</Typography>
                  </Grid>
                  <Grid xs={6} item>
                    {!person || loading ? <Skeleton /> : <Typography>{person?.gender}</Typography>}
                  </Grid>
                </Grid>
              </Grid>
              <XSHiddenGrid xs={12} md={6} item>
                <Icon name="Profile" size="xx-large" />
              </XSHiddenGrid>
              <Grid xs={12} md={6} item>
                <Grid container spacing={2}>
                  <Grid xs={6} item>
                    <Typography fontWeight="bold">{`${t('E-post')}:`}</Typography>
                  </Grid>
                  <Grid xs={6} item>
                    {!person || loading ? (
                      <Skeleton />
                    ) : edit ? (
                      <Input
                        ref={emailRef}
                        defaultValue={person?.email}
                        error={errors?.email?.message}
                        placeholder="Skriv inn e-post"
                      />
                    ) : (
                      <Typography>{person?.email}</Typography>
                    )}
                  </Grid>
                  <Grid xs={6} item>
                    <Typography fontWeight="bold">{`${t('Telefon')}:`}</Typography>
                  </Grid>
                  <Grid xs={6} item>
                    {!person || loading ? (
                      <Skeleton />
                    ) : edit ? (
                      <Input
                        ref={phoneRef}
                        defaultValue={person?.mobile}
                        error={errors?.mobile?.message}
                        placeholder="Skriv inn telefonnummer"
                      />
                    ) : (
                      <Typography>{person?.mobile}</Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12} item>
            <ButtonsContainer
              container
              spacing={2}
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid item>
                <Button
                  type="button"
                  arrowPosition={edit ? 'left' : 'right'}
                  disabled={loading}
                  onClick={handleAbort}
                >
                  {edit ? t('Avbryt') : t('Rediger')}
                </Button>
              </Grid>
              {edit && (
                <Grid item>
                  <Button loading={loading} type="submit">
                    {loading ? `${t('Lagrer')}...` : t('Lagre endringer')}
                  </Button>
                </Grid>
              )}
            </ButtonsContainer>
          </Grid>
        </Container>
      </Form>
    </NavigationHeader>
  );
};

export default Profile;
