import React from 'react';
import {useTranslation} from "react-i18next";
import {Card, Grid, Typography} from "@bob/core-components";
import {Icon} from "../../../components/atomic";

export const FixedPriceWarning = () => {
  const { t } = useTranslation();

  return (
    <Grid item xs={12}>
      <Card>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Icon name='Warning' color='primary' />
          </Grid>
          <Grid item xs>
            <Typography>{t('FIXED_PRICE_WARNING')}</Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}