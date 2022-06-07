import React, { SyntheticEvent } from 'react';
import { Grid, Typography, Switch } from '@bob/core-components';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { HF_ROLES } from '../redux/modules/person/constants';
import { RootState } from '../redux/rootState';
import { IProps } from './preferenceContent/preferenceContent.types';
import { Configuration } from '../redux/modules/person/types';

const PreferenceContent = ({updatePreferences, preferenceChanges, loading}: IProps): JSX.Element => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const userAuth0 = useSelector((store: RootState) => store.auth0.user);
    const changes = preferenceChanges;
    
    const isMember = (): boolean => !!userAuth0?.role?.includes(HF_ROLES.MEMBER_PORTAL_USER);
    const isOwner = (): boolean => !!userAuth0?.role?.includes(HF_ROLES.OWNER_PORTAL_USER);
    const isBoardPortalUser = (): boolean => !!userAuth0?.role?.includes(HF_ROLES.BOARD_PORTAL_USER);

    const handleElectronicCommunicationChange = (value: string): void => {
        const val = value === 'on' ? 1 : 0;
        dispatch(updatePreferences({ acceptElectronicCommunication: val }));
      };
    
      const handleMagazineCodeChange = (value: string): void => {
        const val = value === 'on' ? 'M' : 'N';
        dispatch(updatePreferences({ magazineCode: val }));
      };
    
      const handleCommunicationPreferencesChange = (value: string, event: SyntheticEvent): void => {
        const attr = (event as SyntheticEvent<HTMLButtonElement>).currentTarget?.dataset?.attr as keyof Configuration['communicationPreferences'];
        if (attr) {
          dispatch(updatePreferences({ communicationPreferences: { ...changes.communicationPreferences, [attr]: value === 'on' } }));
        }
      };

    return (
      <>
        <Grid item xs={12}>
          {isMember() && (
            <>
              <Grid item xs={12} />
              <Grid container spacing={2}>
              <Grid item xs={12} />
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography as="h3" size="large" color="violet">{t('Medlemsinformasjon')}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography size="medium" color="black">
                        {t('PREFERENCE_CONTENT_MEMBER_INFO')}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography fontWeight="600">{t('Nyhetsbrev')}</Typography>
                    </Grid>
                    <Grid item>
                      <Switch
                        disabled={loading}
                        value={changes?.communicationPreferences?.acceptMembershipInformationByEmail ? 'on' : 'off'}
                        data-attr="acceptMembershipInformationByEmail"
                        onChange={handleCommunicationPreferencesChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={8}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography fontWeight="600">{t('Medlemsblad')}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography color="black">
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
                <Grid item xs={12}>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography fontWeight="600">{t('SMS-varsel')}</Typography>
                    </Grid>
                    <Grid item>
                      <Switch
                        disabled={loading}
                        value={changes?.communicationPreferences?.acceptMembershipInformationBySMS ? 'on' : 'off'}
                        data-attr="acceptMembershipInformationBySMS"
                        onChange={handleCommunicationPreferencesChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography fontWeight="600">{t('Push-varsel')}</Typography>
                    </Grid>
                    <Grid item>
                      <Switch
                        disabled={loading}
                        value={changes?.communicationPreferences?.acceptMembershipInformationByPush ? 'on' : 'off'}
                        data-attr="acceptMembershipInformationByPush"
                        onChange={handleCommunicationPreferencesChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
        
        <Grid item xs={12}>
          {(isOwner() || isBoardPortalUser()) && (
            <>
            <br/>
              <Grid item xs={12} />
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography as="h3" size="large" color="violet">{t('Borettslaginformasjon')}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={8}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography fontWeight="600">{t('Tillat elektronisk kommunikasjon')}</Typography>            
                        </Grid>
                        <Grid item xs={12}>
                          <Typography color="black">
                            {t('ME_PREFERENCES_ELECTRONIC_COMMUNICATION')}
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
              </Grid>
            </>
          )}
        </Grid>
      </>
    )
}

export default PreferenceContent
