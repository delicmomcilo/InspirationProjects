import React, { useState } from 'react';
import { Card, Grid, Typography } from '@bob/core-components';
import { getOrderDetails } from 'src/clients/vipps';
import { IVippsUserInfo } from 'src/clients/Vipps/types';

const PaymentCompleted = (): JSX.Element => {
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>();
  const [userInfo, setUserInfo] = useState<IVippsUserInfo>();
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('orderId');

  React.useEffect(() => {
    const getVippsOrder = async () => {
      if (id) {
        let orderDetails = await getOrderDetails(id);
        let { orderResponse, userInfo } = orderDetails;
        let orderTransaction = orderResponse?.transactionLogHistory[0].operation;
        let success = orderTransaction === 'RESERVE' || orderTransaction === 'CAPTURE';
        setPaymentSuccess(success);
        setUserInfo(userInfo);
      }
    };

    getVippsOrder();
  }, []);

  return (
    <>
      <Grid xs={12} item>
        <Typography component="h1" fontWeight="bold" size="x-large" color="violet">
          {paymentSuccess
            ? `Velkommen som BOB-medlem, ${userInfo ? userInfo.name : ''}!`
            : 'Ordren din har blitt kansellert'}
        </Typography>
      </Grid>
      <Card>
        {paymentSuccess ? (
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography size="large">Din betaling er nå registrert</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography size="small">
                  Vi har sendt bekreftelse på betaling og en velkomsthilsen på epost.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography size="large">
                  Vi anbefaler å sjekke ut protalen vår Mitt BOB, som på en rask og gøy måte lar deg
                  bruke dine medlemsfordeler i BOB.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography as="h1" size="large" color="violet">
                      {paymentSuccess
                        ? `Velkommen som BOB-medlem, ${userInfo ? userInfo.name : ''}!`
                        : 'Ordren din har blitt kansellert'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>
                      {paymentSuccess
                        ? `Din betaling er registrert. Vi har sendt bekreftelse på betaling og en velkomsthilsen på epost. Din ordrenummer er ${id}.`
                        : 'Din ordre har blitt kansellert. Vennligst prøv på nytt.'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Card>
    </>
  );
};

export default PaymentCompleted;
