import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@bob/core-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { push } from 'connected-react-router';
import Documents from './proof/Documents';
import Navigation from './Navigation';
import { RootState } from '../../redux/rootState';
import PATHS from '../../router/paths';
import { setErrors } from '../../redux/modules/ui/preemption/proof/actions';

const Proof = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const { files, errors } = useSelector((state: RootState) => state.ui.preemption.proof);
  const preemption = useSelector((state: RootState) => state.ui.preemption.shared.preemption);

  const handleNextStep = () => {
    let filesErrors;
    if (files && files.length <= 0) {
      filesErrors = {
        files: { message: t('Du må laste opp finansieringsbevis for å gå videre') },
      };
    } else if (files && files.filter(f => f.type !== 'application/pdf').length > 0) {
      filesErrors = {
        files: { message: t('Du kan kun laste opp filer med .pdf format.') },
      };
    }

    if (filesErrors) {
      dispatch(setErrors(filesErrors));
    } else if (preemption) {
      dispatch(push(PATHS.PREEMPTION_BANK_ID.replace(':id', preemption.id)));
    }
  };

  const handlePreviousStep = () => {
    history.goBack();
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography size="x-large" color="violet" gutterBottom>
          {t('Finansieringsbevis')}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom>{t('INFO')}</Typography>
      </Grid>
      <Documents />
      {errors?.files?.message && (
        <Grid item xs={12}>
          <Typography color="rosso">{errors.files.message}</Typography>
        </Grid>
      )}
      <Navigation
        handleNextClick={handleNextStep}
        handleBackClick={handlePreviousStep}
        backButtonTitle={t('Forrige')}
        nextButtonTitle={t('Verifiser med BankID')}
      />
    </Grid>
  );
};

export default Proof;
