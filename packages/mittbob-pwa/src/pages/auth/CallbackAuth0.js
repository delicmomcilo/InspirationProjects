import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Grid, ProgressIndicator, Typography } from '@bob/core-components';
import { watchHandleRedirectCallback, watchSignOut } from '../../redux/modules/auth0/actions';
import PATHS from '../../router/paths';

const Callback = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const search = new URLSearchParams(window.location.search);
  const error = search.get('error');
  useEffect(() => {
    if (!error) {
      dispatch(watchHandleRedirectCallback());
    } else {
      const code = search.get('error_description');
      dispatch(watchSignOut(`${window.location.origin}${PATHS.HELP}#${code}`));
    }
  }, []);
  return (
    <Grid
      style={{ height: '100%' }}
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Typography size="x-large" color="violet" gutterBottom>
          {`${t('Henter bruker')}...`}
        </Typography>
      </Grid>
      <Grid item>
        <ProgressIndicator size="x-large" />
      </Grid>
    </Grid>
  );
};

export default Callback;
