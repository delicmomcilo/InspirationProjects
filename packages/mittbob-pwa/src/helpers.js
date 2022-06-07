import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { changeBrowserThemeColor } from './redux/modules/ui/app/actions';
import GOOGLE from './config/google';

export const useBrowserThemeColor = (color = 'var(--bob-core-components-color-violet)') => {
  /*
   * Used for setting the meta tag "theme-color" and the body color for usage with meta tag apple-mobile-web-app-status-bar-style
   * This make the color correct on the chrome app bar on mobile and the PWA on ios status bar.
   * */
  const runCount = useRef(0);
  const browserThemeColor = useSelector(({ ui: { app } }) => app.browserThemeColor);
  const dispatch = useDispatch();
  if (browserThemeColor !== color && runCount.current === 0) {
    runCount.current = 1;
    // force delay this dispatch to prevent state changes while rendereing
    window.requestAnimationFrame(() => {
      dispatch(changeBrowserThemeColor(color));
    });
  }
};

export const numberFormat = (number, options = {}) => {
  const nf = new Intl.NumberFormat(i18next.language, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  });
  return nf.format(number);
};
export const loadRecaptchaScript = () => {
  const script = document.createElement('script');
  script.src = GOOGLE.RECAPTCHA.URL;
  script.crossorigin = 'anonymous';
  document.body.appendChild(script);
};

export const getRecaptchaToken = () =>
  new Promise((resolve, reject) => {
    window.grecaptcha.ready(_ => {
      window.grecaptcha
        .execute(GOOGLE.RECAPTCHA.KEY, {
          action: 'changePassword',
        })
        .then(
          token => {
            resolve(token);
          },
          err => {
            reject(err);
          },
        );
    });
  });
