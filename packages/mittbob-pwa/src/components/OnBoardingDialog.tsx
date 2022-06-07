import React  from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Switch, Typography, Button } from '@bob/core-components';
import { useDispatch, useSelector } from 'react-redux';
import ModalDialog from './ModalDialog';
import { RootState } from '../redux/rootState';
import { useFeatureFlags } from '../app/helpers';
import { save, close, updateAuth0 } from '../redux/modules/ui/onboarding/actions';
import { HF_ROLES } from '../redux/modules/person/constants';

const OnBoardingDialog = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const userAuth0 = useSelector((store: RootState) => store.auth0.user);
  const { changesAuth0 } = useSelector((state: RootState) => state.ui.onboarding);
  const show = useSelector((state: RootState) => state.ui.onboarding.show);
  const error = useSelector((state: RootState) => state.ui.onboarding.error);
  const loading = useSelector((state: RootState) => state.ui.onboarding.loading);
  const changes = changesAuth0;

  const isOwner = (): boolean => !!userAuth0?.role?.includes(HF_ROLES.OWNER_PORTAL_USER);
  const isBoardPortalUser = (): boolean => !!userAuth0?.role?.includes(HF_ROLES.BOARD_PORTAL_USER);

  const handleElectronicCommunicationChange = (value: string): void => {
    const val = value === 'on' ? 1 : 0;
    dispatch(updateAuth0({ acceptElectronicCommunication: val }));
  };

  const handleMagazineCodeChange = (value: string): void => {
    const val = value === 'on' ? 'M' : 'N';
    dispatch(updateAuth0({ magazineCode: val }));
  };
  /*
  const handlePreferencesChange = (value: string, event: SyntheticEvent) => {
    const attr = (event as SyntheticEvent<HTMLButtonElement>).currentTarget?.dataset
      ?.attr as keyof IdmUser['preferences'];
    if (attr && changes.preferences) {
      dispatch(update({ preferences: { ...changes.preferences, [attr]: value === 'on' } }));
    }
  }; */
  const handleOnClose = (): void => {
    dispatch(close());
  };
  const handleOnSave = (): void => {
    dispatch(save());
  };

  return (
    <ModalDialog open={show} onClose={handleOnClose}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography size="x-large" fontWeight="bold" color="violet">
            {t('ONBOARD_DIALOG_HEADER')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{t('ONBOARD_DIALOG_INFO')}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color="light-grey" size="small">
            {t('ONBOARD_DIALOG_CAPTION')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {(isOwner() || isBoardPortalUser()) && (            
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography>{t('Tillat elektronisk kommunikasjon')}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography size="x-small" color="light-grey">
                        {t('ONBOARDING_ELECTRONIC_COMMUNICATION')}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Switch
                    disabled={loading}
                    data-attr="acceptElectronicCommunication"
                    value={changes?.acceptElectronicCommunication === 1 ? 'on' : 'off'}
                    onChange={handleElectronicCommunicationChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            )}
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography>{t('Medlemsblad')}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography size="x-small" color="light-grey">
                        {t('ME_PREFERENCES_MAGAZINE')}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Switch
                    disabled={loading}
                    value={changes?.magazineCode === 'M' ? 'on' : 'off'}
                    onChange={handleMagazineCodeChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item xs={12} /> */}
            {/* <Grid item xs={12}> */}
            {/*  <Grid container> */}
            {/*    <Grid item xs={12}> */}
            {/*      <Typography color="violet">{t('Medlemsinformasjon')}</Typography> */}
            {/*    </Grid> */}
            {/*    <Grid item xs={12}> */}
            {/*      <Typography size="x-small" color="light-grey"> */}
            {/*        {t('ONBOARDING_MEMBER_INFO')} */}
            {/*      </Typography> */}
            {/*    </Grid> */}
            {/*  </Grid> */}
            {/* </Grid> */}
            {/* <Grid item xs={12}> */}
            {/*  <Grid container justifyContent="space-between"> */}
            {/*    <Grid item> */}
            {/*      <Typography>{t('SMS-varsel')}</Typography> */}
            {/*    </Grid> */}
            {/*    <Grid item> */}
            {/*      <Switch */}
            {/*        disabled={loading} */}
            {/*        value={changes?.preferences?.acceptMembershipInformationBySMS ? 'on' : 'off'} */}
            {/*        data-attr="acceptMembershipInformationBySMS" */}
            {/*        onChange={handlePreferencesChange} */}
            {/*      /> */}
            {/*    </Grid> */}
            {/*  </Grid> */}
            {/* </Grid> */}
            {/* <Grid item xs={12}> */}
            {/*  <Grid container justifyContent="space-between"> */}
            {/*    <Grid item> */}
            {/*      <Typography>{t('Push-varsel')}</Typography> */}
            {/*    </Grid> */}
            {/*    <Grid item> */}
            {/*      <Switch */}
            {/*        disabled={loading} */}
            {/*        value={changes?.preferences?.acceptMembershipInformationByPush ? 'on' : 'off'} */}
            {/*        data-attr="acceptMembershipInformationByPush" */}
            {/*        onChange={handlePreferencesChange} */}
            {/*      /> */}
            {/*    </Grid> */}
            {/*  </Grid> */}
            {/* </Grid> */}
            {/* <Grid item xs={12}> */}
            {/*  <Grid container justifyContent="space-between"> */}
            {/*    <Grid item> */}
            {/*      <Typography>{t('E-post')}</Typography> */}
            {/*    </Grid> */}
            {/*    <Grid item> */}
            {/*      <Switch */}
            {/*        disabled={loading} */}
            {/*        value={changes?.preferences?.acceptMembershipInformationByEmail ? 'on' : 'off'} */}
            {/*        data-attr="acceptMembershipInformationByEmail" */}
            {/*        onChange={handlePreferencesChange} */}
            {/*      /> */}
            {/*    </Grid> */}
            {/*  </Grid> */}
            {/* </Grid> */}
            {/* <Grid item xs={12} /> */}
            {/* <Grid item xs={12}> */}
            {/*  <Grid container> */}
            {/*    <Grid item xs={12}> */}
            {/*      <Typography color="violet">{t('Medlemsfordeler')}</Typography> */}
            {/*    </Grid> */}
            {/*    <Grid item xs={12}> */}
            {/*      <Typography size="x-small" color="light-grey"> */}
            {/*        {t('ONBOARDING_MEMBER_OFFER')} */}
            {/*      </Typography> */}
            {/*    </Grid> */}
            {/*  </Grid> */}
            {/* </Grid> */}
            {/* <Grid item xs={12}> */}
            {/*  <Grid container justifyContent="space-between"> */}
            {/*    <Grid item> */}
            {/*      <Typography>{t('SMS-varsel')}</Typography> */}
            {/*    </Grid> */}
            {/*    <Grid item> */}
            {/*      <Switch */}
            {/*        disabled={loading} */}
            {/*        value={ */}
            {/*          changes?.preferences?.acceptMembershipOfferCommunicationBySMS ? 'on' : 'off' */}
            {/*        } */}
            {/*        data-attr="acceptMembershipOfferCommunicationBySMS" */}
            {/*        onChange={handlePreferencesChange} */}
            {/*      /> */}
            {/*    </Grid> */}
            {/*  </Grid> */}
            {/* </Grid> */}
            {/* <Grid item xs={12}> */}
            {/*  <Grid container justifyContent="space-between"> */}
            {/*    <Grid item> */}
            {/*      <Typography>{t('Push-varsel')}</Typography> */}
            {/*    </Grid> */}
            {/*    <Grid item> */}
            {/*      <Switch */}
            {/*        disabled={loading} */}
            {/*        value={ */}
            {/*          changes?.preferences?.acceptMembershipOfferCommunicationByPush ? 'on' : 'off' */}
            {/*        } */}
            {/*        data-attr="acceptMembershipOfferCommunicationByPush" */}
            {/*        onChange={handlePreferencesChange} */}
            {/*      /> */}
            {/*    </Grid> */}
            {/*  </Grid> */}
            {/* </Grid> */}
            {/* <Grid item xs={12}> */}
            {/*  <Grid container justifyContent="space-between"> */}
            {/*    <Grid item> */}
            {/*      <Typography>{t('E-post')}</Typography> */}
            {/*    </Grid> */}
            {/*    <Grid item> */}
            {/*      <Switch */}
            {/*        disabled={loading} */}
            {/*        value={ */}
            {/*          changes?.preferences?.acceptMembershipOfferCommunicationByEmail ? 'on' : 'off' */}
            {/*        } */}
            {/*        data-attr="acceptMembershipOfferCommunicationByEmail" */}
            {/*        onChange={handlePreferencesChange} */}
            {/*      /> */}
            {/*    </Grid> */}
            {/*  </Grid> */}
            {/* </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography color="light-grey" size="x-small">
            {t('ONBOARD_DIALOG_END_CAPTION')}
          </Typography>
        </Grid>
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
      </Grid>
    </ModalDialog>
  );
};

const FeatureWrapper = (): JSX.Element => {
  const { onboardingDialog } = useFeatureFlags();
  if (onboardingDialog) return <OnBoardingDialog />;
  return <></>;
};

export default FeatureWrapper;
