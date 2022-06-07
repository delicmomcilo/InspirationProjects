import { Button, Grid } from '@bob/core-components';
import React from 'react';
import { IProps } from './navigation/navigation.types';

const Navigation = ({ disableNext, backButtonTitle, handleBackClick, handleNextClick, nextButtonTitle, loading }: IProps): JSX.Element => (
  <Grid item xs={12}>
    <Grid container spacing={2} justifyContent="space-around" alignItems="center">
      <Grid item>
        <Button disabled={loading} arrowPosition="left" variant="tertiary" onClick={handleBackClick}>
          {backButtonTitle}
        </Button>
      </Grid>
      <Grid item>
        <Button disabled={disableNext || loading} loading={loading} onClick={handleNextClick}>{nextButtonTitle}</Button>
      </Grid>
    </Grid>
  </Grid>
);

export default Navigation;