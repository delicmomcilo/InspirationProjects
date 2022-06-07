import PWAPrompt from 'react-ios-pwa-prompt';
import React, { useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { detect } from 'detect-browser';
import copy from 'copy-to-clipboard';
import ModalDialog from '../components/atomic/ModalDialog';
import { Button, Card } from '../components/atomic';
import Tooltip from '../components/atomic/Tooltip';

const browser = detect();
const TIP_TIMEOUT = 1000;

// Copied from original code in react-ios-pwa-prompt
const deviceCheck = () => {
  const isiOS = /iphone|ipad|ipod/.test(
    window.navigator.userAgent.toLowerCase(),
  );
  const isiPadOS =
    navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  const isStandalone =
    'standalone' in window.navigator && window.navigator.standalone;

  return (isiOS || isiPadOS) && !isStandalone;
};

const InstallAppPrompt = memo(() => {
  const [showTip, setShowTip] = useState(false);
  const { t } = useTranslation();
  if (
    deviceCheck() &&
    browser.name !== 'safari' &&
    browser.name !== 'ios' &&
    browser.name !== 'ios-webview'
  ) {
    return (
      <ModalDialog title={t('Vil du installere appen?')} open>
        {t('INSTALL_APP_MESSAGE')}
        <Card.Actions>
          <Tooltip show={showTip} tip={`${t('Kopiert')}!`}>
            <Button
              fitContent
              showArrow={false}
              onClick={() => {
                copy(window.location.origin);
                setShowTip(true);
                setTimeout(() => setShowTip(false), TIP_TIMEOUT);
              }}
            >
              {t('Kopier lenke')}
            </Button>
          </Tooltip>
        </Card.Actions>
      </ModalDialog>
    );
  }
  return (
    <PWAPrompt
      timesToShow={5}
      copyClosePrompt={t('Avbryt')}
      copyTitle={t('Legg til på Hjem skjerm')}
      copyBody={t('WEB_APP_MESSAGE')}
      copyShareButtonLabel={t('WEB_APP_SHARE')}
      copyAddHomeButtonLabel={t('WEB_APP_ADD')}
    />
  );
});

export default InstallAppPrompt;
