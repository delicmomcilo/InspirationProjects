
import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyles from '../src/GlobalStyles';
import {ThemeProvider} from '../src';
// import { withKnobs } from '@storybook/addon-knobs';
// import { withInfo } from '@storybook/addon-info';
import { boolean } from '@storybook/addon-knobs';

// addDecorator(withKnobs);
// addDecorator(withInfo);

addDecorator(s => {
  const light = boolean('Lightmode', true);
  return (
    <div
      style={{
        padding: '2rem',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: light ? '#fff' : '#54227C',
      }}
    >
      <GlobalStyles />
      <ThemeProvider theme={{ mode: light ? 'light' : 'dark' }}>{s()}</ThemeProvider>
    </div>
  );
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

