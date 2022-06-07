import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button } from './atomic';
import { OidcClientLight } from '../clients';
import { bankId } from '../config';

const authService = new OidcClientLight({
  scope: 'openid profile',
  exchangeUrl: bankId.exchangeUrl,
  clientId: bankId.clientId,
  redirectUri: bankId.redirectUri,
  wellKnownEndpoint: bankId.wellKnownEndpoint,
});

const BankID = ({ onAuthenticateSuccess, onAuthenticateError }) => {
  const [ready, setReady] = useState(false);
  const { t } = useTranslation();
  const startAuth = useCallback(() => {
    authService
      .authenticate()
      .then(res => {
        const parsedIdToken = JSON.parse(atob(res.id_token.split('.')[1]));
        onAuthenticateSuccess({ ...res, parsedIdToken });
      })
      .catch(e => {
        onAuthenticateError(e);
      });
  }, [onAuthenticateSuccess, onAuthenticateError]);
  useEffect(() => {
    authService
      .prepare()
      .then(() => setReady(true))
      .catch(e => console.error(e));
  }, [startAuth]);

  return (
    <Button disabled={!ready} onClick={startAuth}>
      {t('Logg inn med Bank ID')}
    </Button>
  );
};

BankID.propTypes = {
  onAuthenticateSuccess: PropTypes.func,
  onAuthenticateError: PropTypes.func,
};

BankID.defaultProps = {
  onAuthenticateSuccess: f => f,
  onAuthenticateError: error => console.error(error), //eslint-disable-line
};

const Callback = ({
  onCallbackSuccess = f => f,
  onCallbackError = e => console.error(e), // eslint-disable-line
}) => {
  useEffect(() => {
    // We do not need to display anthing on this page. Consider rendering it stand alone.
    document.getElementsByTagName('body')[0].style = 'display: none';
    authService
      .callback()
      .then(() => {
        window.close();
      })
      .catch(e => console.error(e));
  }, []);
  return null;
};

BankID.Callback = Callback;

/* Testing purposes, will be removed */
const TestPage = () => {
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  return (
    <>
      <BankID
        onAuthenticateError={e => setError(JSON.stringify(e))}
        onAuthenticateSuccess={e => setResponse(e)}
      />
      <span>Result</span>
      <pre>{JSON.stringify(response, 2, 2)}</pre>
      <span>Error</span>
      <span>{error}</span>
    </>
  );
};
BankID.TestPage = TestPage;
/* Testing purposes end */
export default BankID;
