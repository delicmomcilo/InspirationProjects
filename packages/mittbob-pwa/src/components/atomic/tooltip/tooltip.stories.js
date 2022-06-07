import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Tooltip from '../Tooltip';

export default { title: 'Tooltip' };

export const automatic = () => {
  const tip = text('Tip', 'Hello button');
  return (
    <Tooltip tip={tip}>
      <p>I&apos;m a paragraph</p>
    </Tooltip>
  );
};

export const manual = () => {
  const tip = text('Tip', 'Hello button');
  const show = boolean('Show', false);
  return (
    <Tooltip tip={tip} show={show}>
      <p>I&apos;m a paragraph</p>
    </Tooltip>
  );
};
