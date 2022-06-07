import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

export const media = {
  app: '@media (max-width: 60em)',
  notMaxWidth: '@media (max-width: 85em)',
};

const queries = {
  app: window.matchMedia('(max-width: 60em)'),
};

const getMatches = () => ({
  isDesktop: !queries.app.matches,
  isMobile: queries.app.matches,
});

export const useMedia = () => {
  const [matches, setMatches] = React.useState(getMatches);

  React.useEffect(() => {
    const handler = () => setMatches(getMatches);
    if (queries.app.addEventListener) {
      queries.app.addEventListener('change', handler);
      return () => queries.app.removeEventListener('change', handler);
    }
    queries.app.addListener(handler); // older browser support and safari
    return () => queries.app.removeListener(handler); // older browser support and safari
  }, []);

  return matches;
};

export const GlobalStyle = createGlobalStyle`
   html {
     position: fixed;
  }

   #root, body, html {
     width: 100%;
     height: 100%;
     overflow: hidden;
     background-color: var(--bob-core-components-color-mint20);
   }
   
   .grecaptcha-badge { visibility:hidden; }
`;

const backgroundColor = theme('mode', {
  light: 'var(--bob-core-components-color-mint20)',
  dark: 'var(--bob-core-components-color-violet-darker)',
});

export const AppContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${backgroundColor};
`;

export const RoutesContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  display: flex;
  ${media.app} {
    display: unset;
  }
`;

export const RoutesWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 85rem;
  margin: auto;
  ${media.app} {
    width: unset;
    margin: unset;
  }
`;
