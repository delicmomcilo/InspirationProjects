import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import store from './redux/store';
import { GlobalStyle } from './app/app.styles';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18n from './i18n';
import { featureFlags } from './config';
import { swInit, swUpdate } from './redux/modules/app/actions';
import { GlobalStyles as BCCGlobalStyles } from './components/atomic';
import './polyfills';

const renderApp = () => {
  // The /callback is handled inside a separate IFrame
  if (window.location.pathname.startsWith('/callback')) return;
  ReactDOM.render(
    <Provider store={store}>
      <BCCGlobalStyles />
      <GlobalStyle />
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>,
    document.getElementById('root'),
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  featureFlags.serviceWorker
    ? serviceWorker.register({
        onSuccess: () => store.dispatch(swInit()),
        onUpdate: payload => store.dispatch(swUpdate(payload)),
      })
    : serviceWorker.unregister();
};

renderApp();
