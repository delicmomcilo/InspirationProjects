import React from 'react';
import {
  Container,
  Header,
  Information,
  List,
  UnsupportedIcon,
} from './unsupportedBrowser/unsupportedBrowser.styles';
import { ReactComponent as FirefoxSvg } from './unsupportedBrowser/firefox.svg';
import { ReactComponent as EdgeSvg } from './unsupportedBrowser/edge.svg';
import { ReactComponent as ChromeSvg } from './unsupportedBrowser/chrome.svg';

const UnsupportedBrowser = () => {
  // Use renderToStaticMarkup and copy the html to /public/notSupported.js
  return (
    <Container>
      <UnsupportedIcon />
      <Information>
        <Header>
          Hmm. Nettleseren din støttes ikke. Her er noen som virker:
        </Header>
        <List>
          <li>
            <EdgeSvg />
            <span>Microsoft Edge</span>
            <span>-</span>
            <a
              href="https://www.microsoft.com/edge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Installer gratis
            </a>
          </li>
          <li>
            <ChromeSvg />
            <span>Google Chrome</span>
            <span>-</span>
            <a
              href="https://www.google.com/chrome/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Installer gratis
            </a>
          </li>
          <li>
            <FirefoxSvg />
            <span>Mozilla Firefox</span>
            <span>-</span>
            <a
              href="https://www.mozilla.org/firefox/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Installer gratis
            </a>
          </li>
        </List>
      </Information>
    </Container>
  );
};

export default UnsupportedBrowser;
