import React from 'react';
import { action, } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs';
import Banner from '../Banner';

export default { title: 'Banner',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  args: {
    open: true,
    text: 'Im a banner'
  }
};

export const component = ({ open, text}) => {
  return (
    <Banner
      show={open}
      dismissTitle="Dismiss me"
      okTitle="OK Action"
    >
      {text}
    </Banner>
  );
};
