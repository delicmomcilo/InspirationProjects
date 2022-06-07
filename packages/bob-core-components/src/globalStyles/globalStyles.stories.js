import React from 'react';
import { select } from '@storybook/addon-knobs';
import { fontColors, fontSizes, fontWeightTypes } from '../typography/config';

export default {
  title: 'Global styles and classes',
};

export const typography = () => {
  const sizes = Object.keys(fontSizes);
  const color = select('Color', fontColors, fontColors[0]);
  const size = select('Font size', sizes, sizes[0]);
  const weight = select('Font weight', fontWeightTypes, fontWeightTypes[0]);
  return (
    <div>
      <h1
        className={`bob-core-components-typography__${weight}--${size}--${color}`}
      >
        h1
      </h1>
      <h2
        className={`bob-core-components-typography__${weight}--${size}--${color}`}
      >
        h2
      </h2>
      <h3
        className={`bob-core-components-typography__${weight}--${size}--${color}`}
      >
        h3
      </h3>
      <h4
        className={`bob-core-components-typography__${weight}--${size}--${color}`}
      >
        h4
      </h4>
      <span
        className={`bob-core-components-typography__${weight}--${size}--${color}`}
      >
        span
      </span>
      <p
        className={`bob-core-components-typography__${weight}--${size}--${color}`}
      >
        p
      </p>
    </div>
  );
};
