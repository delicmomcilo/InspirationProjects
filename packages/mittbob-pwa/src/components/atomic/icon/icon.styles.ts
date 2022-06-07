import styled, {
  AnyStyledComponent,
  css,
  FlattenInterpolation,
  StyledProps,
} from 'styled-components';
import theme from 'styled-theming';
import { FunctionComponent } from 'react';
import { IStyledIcon } from './types';

const primaryTint = theme.variants('mode', 'color', {
  primary: {
    light: 'var(--bob-core-components-color-violet)',
    dark: 'var(--bob-core-components-color-violet)',
  },
  tertiary: {
    light: 'var(--bob-core-components-color-light-grey)',
    dark: 'var(--bob-core-components-color-light-grey)',
  },
  success: {
    light: 'var(--bob-core-components-color-success)',
    dark: 'var(--bob-core-components-color-success)',
  },
  warning: {
    light: 'var(--bob-core-components-color-rosso60)',
    dark: 'var(--bob-core-components-color-rosso60)',
  },
});

const secondaryTint = theme.variants('mode', 'color', {
  primary: {
    light: 'var(--bob-core-components-color-yellow)',
    dark: 'var(--bob-core-components-color-yellow)',
  },
  tertiary: {
    light: 'var(--bob-core-components-color-light-grey)',
    dark: 'var(--bob-core-components-color-light-grey)',
  },
  success: {
    light: 'var(--bob-core-components-color-success)',
    dark: 'var(--bob-core-components-color-success)',
  },
  warning: {
    light: 'var(--bob-core-components-color-rosso60)',
    dark: 'var(--bob-core-components-color-rosso60)',
  },
});

const tertiaryTint = theme.variants('mode', 'color', {
  primary: {
    light: 'var(--bob-core-components-color-mint-darken)',
    dark: 'var(--bob-core-components-color-mint-darken)',
  },
  tertiary: {
    light: 'var(--bob-core-components-color-light-grey)',
    dark: 'var(--bob-core-components-color-light-grey)',
  },
  success: {
    light: 'var(--bob-core-components-color-success)',
    dark: 'var(--bob-core-components-color-success)',
  },
  warning: {
    light: 'var(--bob-core-components-color-rosso60)',
    dark: 'var(--bob-core-components-color-rosso60)',
  },
});

export const sizes = {
  'xxx-large': '8rem',
  'xx-large': '7rem',
  'x-large-1': '4rem',
  'x-large': '3rem',
  large: '2rem',
  medium: '1.5rem',
} as const;

const getSize = ({ size }: IStyledIcon): string => (size ? sizes[size] : '');

const getRoundCss = ({
  round,
}: IStyledIcon): FlattenInterpolation<StyledProps<IStyledIcon>> | string =>
  round
    ? css<IStyledIcon>`
        display: inline-block;
        border-radius: 50%;
        box-shadow: 0 0 0.25rem var(--bob-core-components-color-ash);
        padding: 0.5rem;
        width: calc(${getSize} + 1rem); // padding both sides
        height: calc(${getSize} + 1rem); // padding both sides
      `
    : '';

const iconCss = css<IStyledIcon>`
  width: ${getSize};
  height: ${getSize};
  .primarytint {
    fill: ${primaryTint};
  }
  .secondarytint {
    fill: ${secondaryTint};
  }
  .tertiarytint {
    fill: ${tertiaryTint};
  }
  ${getRoundCss};
`;

export const createOutlined = (component: AnyStyledComponent): AnyStyledComponent => styled(
  component,
)`
  .secondarytint,
  .tertiarytint {
    display: none;
  }
`;
export const createStyledIcon = (
  component: AnyStyledComponent | FunctionComponent,
): AnyStyledComponent => styled(component)`
  ${iconCss}
`;
