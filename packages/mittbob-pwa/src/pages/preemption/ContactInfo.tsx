import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Input, Grid } from '@bob/core-components';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import PersonDetails from './contactInfo/PersonDetails';
import Terms from './contactInfo/Terms';
import { RootState } from '../../redux/rootState';
import {
  setErrors,
  /* toggleCommonMembershipChecked, */
  toggleTermsChecked,
} from '../../redux/modules/ui/preemption/contactInfo/actions';
import validate from './contactInfo/validation';
import PATHS from '../../router/paths';
import { Params } from '../../router/types';
import Navigation from './Navigation';

const ContactInfo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<Params>();
  const { errors, termsChecked, /* commonMembershipChecked */ } = useSelector(
    (state: RootState) => state.ui.preemption.contactInfo,
  );
  const preemption = useSelector((state: RootState) => state.ui.preemption.shared.preemption);
  if (preemption) {
    const handleTermsCheck = (e: React.ChangeEventHandler<HTMLInputElement>) => {
      dispatch(toggleTermsChecked());
    };
    // const handleCommonMembershipCheck = (e: React.ChangeEventHandler<HTMLInputElement>) => {
    //   dispatch(toggleCommonMembershipChecked());
    // };
    const handleNextStep = () => {
      const e = validate({ termsChecked }, t);
      if (e) {
        dispatch(setErrors(e));
      } else {
        dispatch(setErrors({}));
        if (preemption.clarificationInAdvance) {
          dispatch(push(PATHS.PREEMPTION_SUMMARY.replace(':id', preemption.id)));
        } else {
          dispatch(push(PATHS.PREEMPTION_PROOF.replace(':id', preemption.id)));
        }
      }
    };

    const handlePreviousStep = () => {
      history.goBack();
    };
    return (
      <Grid xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <PersonDetails />
              {/*<ExtraContact onSave={f => f} />*/}
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Terms />
          </Grid>
          <Grid item xs={12}>
            <Input
              onChange={handleTermsCheck}
              checked={termsChecked}
              type="checkbox"
              label={t('Jeg er enig i betingelsene')}
              error={errors.termsChecked?.message}
            />
          </Grid>
          {/*<Grid item xs={12}>*/}
          {/*  <Input*/}
          {/*    onChange={handleCommonMembershipCheck}*/}
          {/*    checked={commonMembershipChecked}*/}
          {/*    type="checkbox"*/}
          {/*    label={t('Jeg er andelseier i samme borettslag')}*/}
          {/*  />*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12}>*/}
          {/*  <Input*/}
          {/*    onChange={handleCommonMembershipCheck}*/}
          {/*    checked={commonMembershipChecked}*/}
          {/*    type="checkbox"*/}
          {/*    label={t('Jeg bruker Felles Forkjøpsrett Storby')}*/}
          {/*  />*/}
          {/*</Grid>*/}
          <Navigation
            handleBackClick={handlePreviousStep}
            handleNextClick={handleNextStep}
            backButtonTitle={t('Forrige')}
            nextButtonTitle={
              preemption.clarificationInAdvance ? t('Oppsummering') : t('Finansiering')
            }
          />
        </Grid>
      </Grid>
    );
  }

  if (preemption && params.id) {
    dispatch(push(PATHS.PREEMPTION.replace(':id', params.id)));
    return null;
  }
  dispatch(push(PATHS.APARTMENTS));
  return null;
};

export default ContactInfo;
