import React from 'react';
import { action, } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs';
import BarDiagram from '../BarDiagram';

export default { title: 'BarDiagram',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onClick: { action: 'clicked' } },
  args: {
    size: 'medium',
  }
};

export const component = (args) => {
  const arr = new Array(12).fill(0).map(() => Math.random());
  const bars = arr.map((i,  index) => {
    let variant = 'blank';
    const value = Math.floor(i * 1000);
    if (i > 0.3) variant = 'regular';
    if (i > 0.9) variant = 'warning';
    const bar = {
      id: i.id,
      value: value,
      displayValue: `Formatted ${value}`,
      label: `L:${index}`,
      variant,
      // icon: getVariant(i) === 'blank' && <CalendarIcon />,
      success: variant === 'regular',
      warning: variant === 'warning',
    };
    return bar
  });
  return (
    <BarDiagram
      list={bars}
      selectedIndex={1}
      {...args}
    />
  );
};
