import React, { ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Input, Grid, Typography, NumberFormat } from '@bob/core-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import PersonDetails from './contactInfo/PersonDetails';
import { RootState } from '../../redux/rootState';
import validate from './summary/validation';
import { Params } from '../../router/types';
import actions from '../../redux/actions';
// import { push } from 'connected-react-router';
import Navigation from './Navigation';
import { init } from '../../redux/modules/ui/preemption/shared/actions';
import {
  setErrors,
  toggleBindingCheckbox,
  toggleSeniorityCheckbox,
} from '../../redux/modules/ui/preemption/summary/actions';
import {FixedPriceWarning} from "./preview/FixedPriceWarning";

const ContactInfo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<Params>();

  useEffect(() => {
    if (params.id) dispatch(init({ preemptionId: params.id }));
  }, [dispatch, params.id]);
  const { seniorityChecked = false, bindingContractChecked = false, errors } = useSelector(
    (state: RootState) => state.ui.preemption.summary,
  );
  const preemption = useSelector((state: RootState) => state.ui.preemption.shared.preemption);
  const loading = useSelector((state: RootState) => state.preemption.loadingPostInterest);
  const files = useSelector((state: RootState) => state.ui.preemption.proof.files);
  const bankIdToken = useSelector(
    (state: RootState) => state.ui.preemption.bankId.response?.id_token,
  );

  if (!preemption) return null;
  const isFixedPrice = preemption.clarificationType === 'ManagedFixedPrice';
  const formattedDeadline = moment(preemption.deadline).format('dddd D.MMMM, hh.mm');

  const handleNextStep = (): void => {
    if (isFixedPrice) {
      const e = validate({ seniorityChecked, bindingContractChecked }, t);
      if (e) {
        dispatch(setErrors(e));
        return;
      }
    }
    dispatch(setErrors({}));
    if (isFixedPrice) {
      const data = { files, bankIdToken };
      dispatch(actions.preemption.postInterest({ id: preemption.id, data }));
    } else {
      dispatch(
        actions.preemption.postInterest({ id: preemption.id }),
      );
    }
  };

  const handlePreviousStep = (): void => {
    history.goBack();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.currentTarget.dataset.attr === 'seniority') {
      dispatch(toggleBindingCheckbox());
    } else if (e.currentTarget.dataset.attr === 'bindingContract') {
      dispatch(toggleSeniorityCheckbox());
    }
  };
  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <Grid container>
              <Grid item xs={12}>
                <PersonDetails />
              </Grid>
            </Grid>
            <Card.Banner>
              <Typography color="snow" size="large">
                {t('Melder forkjøp for')}
              </Typography>
            </Card.Banner>

            <Grid container>
              <Grid item xs={12}>
                <Typography gutterBottom size="large" color="violet">
                  {preemption.unit.address}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography gutterBottom>{t('Meldefrist')}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom color="violet" textAlign="last">
                      {formattedDeadline}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {isFixedPrice && (
                <Grid item xs={12}>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography gutterBottom>{t('Fastpris')}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom color="violet" textAlign="last">
                        <NumberFormat number={preemption.pricing.fixedPrice} />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              <Grid item xs={12}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography gutterBottom>{t('Fellesgjeld')}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom color="violet" textAlign="last">
                      <NumberFormat number={preemption.pricing.jointDebt} />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {isFixedPrice && (
                <Grid item xs={12}>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography gutterBottom>{t('Totalpris')}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography fontWeight="bold" gutterBottom color="violet" textAlign="last">
                        <NumberFormat number={preemption.pricing.totalPrice} />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Card>
        </Grid>
        {!isFixedPrice && (
          <Grid item xs={12}>
            <Typography color="violet" size="large">
              {t('PREEMPTION_SUMMARY_DEADLINE_MESSAGE', { date: formattedDeadline })}
            </Typography>
          </Grid>
        )}
        {preemption.clarificationType === "ManagedFixedPrice" && <FixedPriceWarning />}
        {isFixedPrice && (
          <>
            <Grid item xs={12}>
              <Input
                data-attr="bindingContract"
                onChange={handleChange}
                value={bindingContractChecked}
                error={errors?.bindingContractChecked?.message}
                type="checkbox"
                label={t(
                  'Om jeg har best ansiennitet binder jeg meg til å opprette kjøpskontrakt med selger.',
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                data-attr="seniority"
                error={errors?.seniorityChecked?.message}
                onChange={handleChange}
                value={seniorityChecked}
                type="checkbox"
                label={t(
                  'Jeg forstår at min valgte ansiennitetsdato blir nullstilt dersom jeg overtar boligen på forkjøp.',
                )}
              />
            </Grid>
          </>
        )}
        <Navigation
          handleBackClick={handlePreviousStep}
          handleNextClick={handleNextStep}
          backButtonTitle={t('Forrige')}
          nextButtonTitle={t('Meld forkjøp')}
          loading={loading}
        />
      </Grid>
    </Grid>
  );
  // }
  //
  // if (preemption && params.id) {
  //   dispatch(push(PATHS.PREEMPTION.replace(':id', params.id)));
  //   return null;
  // }
  // dispatch(push(PATHS.APARTMENTS));
  // return null;
};

export default ContactInfo;
