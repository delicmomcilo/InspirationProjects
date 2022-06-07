import { Card, Grid, Typography } from '@bob/core-components';
import React from 'react';
import { useFeatureFlags } from 'src/app/helpers';
import PaymentCompleted from 'src/pages/PaymentCompleted';
import VippsCheckoutButton from './VippsCheckoutButton';

const VippsCheckout = (): JSX.Element => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('orderId');

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {myParam ? (
              <PaymentCompleted />
            ) : (
              <>
                <Grid xs={12} item>
                  <Typography component="h1" fontWeight="bold" size="x-large" color="violet">
                    Bli BOB-medlem:
                  </Typography>
                </Grid>
                <Card>
                  <Grid item xs={12}>
                    <Grid container spacing={4}>
                      <Grid item xs={12}>
                        <Typography size="large">Nå gjenstår kun betaling.</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography size="small">
                          For å bli medeier av BOB BBL må du betale aksjeandelskapital på kr 300.
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography size="small">
                          Siden vi synes det er så kjekt å få deg med på laget spanderer vi din
                          første avgift på kr 300.
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={5}>
                                <Typography size="small">Andelskapital</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography size="small">300 kr</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={5}>
                                <Typography size="small">Årsavgift</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography size="small">0 kr</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={5}>
                                <Typography size="small">Totalt</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography size="small">300 kr</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="center">
                          <VippsCheckoutButton />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const FeatureWrapper = (): JSX.Element => {
  const { vippsCheckout } = useFeatureFlags();
  if (vippsCheckout) return <VippsCheckout />;
  return <></>;
};

export default FeatureWrapper;
