import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from '../Button';

export default { title: 'Button' };

export const primary = () => {
  const btnText = text('Text', 'Hello button');
  return (
    <Button variant="primary" onClick={action('click')}>
      {btnText}
    </Button>
  );
};
export const secondary = () => {
  const btnText = text('Text', 'Hello button');
  return (
    <Button variant="secondary" onClick={action('click')}>
      {btnText}
    </Button>
  );
};
export const secondaryWithIcon = () => {
  const btnText = text('Text', 'Hello button');
  return (
    <Button variant="secondary" iconName="SearchOutlined" onClick={action('click')}>
      {btnText}
    </Button>
  );
};
export const tertiary = () => {
  const btnText = text('Text', 'Hello button');
  return (
    <Button variant="tertiary" onClick={action('click')}>
      {btnText}
    </Button>
  );
};
export const tertiaryWithIcon = () => {
  const btnText = text('Text', 'Hello button');
  return (
    <Button variant="tertiary" iconName="SearchOutlined" onClick={action('click')}>
      {btnText}
    </Button>
  );
};
export const septenary = () => {
  const btnText = text('Text', 'Hello button');
  return (
    <Button variant="septenary" onClick={action('click')}>
      {btnText}
    </Button>
  );
};

export const icon = () => {
  return <Button variant="icon" iconName="Close" onClick={action('click')} />;
};
export const iconRound = () => {
  return (
    <Button variant="icon" iconProps={{ round: true }} iconName="Close" onClick={action('click')} />
  );
};

export const iconWithText = () => {
  const btnText = text('Text', 'Hello button');
  return (
    <Button variant="icon" iconName="Close" onClick={action('click')}>
      {btnText}
    </Button>
  );
};
