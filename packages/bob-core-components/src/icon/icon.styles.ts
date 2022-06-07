import styled, {
  AnyStyledComponent,
  css, DefaultTheme,
} from 'styled-components';
import theme, { ThemeValueFn, ThemeValueResult } from 'styled-theming';
import { FunctionComponent } from 'react';
import { IProps } from './types';

const primaryTint = theme.variants('mode', 'color', {
  primary: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors.violet) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors.violet) as ThemeValueFn,
  },
  tertiary: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['light-grey']) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['light-grey']) as ThemeValueFn,
  },
  success: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['success']) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['success']) as ThemeValueFn,
  },
  warning: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['rosso60']) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['rosso60']) as ThemeValueFn,
  },
});

const secondaryTint = theme.variants('mode', 'color', {
  primary: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors.yellow) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors.yellow) as ThemeValueFn,
  },
  tertiary: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['light-grey']) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['light-grey']) as ThemeValueFn,
  },
  success: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['success']) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['success']) as ThemeValueFn,
  },
  warning: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['rosso60']) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['rosso60']) as ThemeValueFn,
  },
});

const tertiaryTint = theme.variants('mode', 'color', {
  primary: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['mint-darken']) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['mint-darken']) as ThemeValueFn,
  },
  tertiary: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['light-grey']) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['light-grey']) as ThemeValueFn,
  },
  success: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['success']) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['success']) as ThemeValueFn,
  },
  warning: {
    light: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['rosso60']) as ThemeValueFn,
    dark: (({theme}: { theme: DefaultTheme}) => theme.variables.colors['rosso60']) as ThemeValueFn,
  },
});
//
// const primaryTint = theme.variants('mode', 'color', {
//   primary: {
//     light: 'var(--bob-core-components-color-violet)',
//     dark: 'var(--bob-core-components-color-violet)',
//   },
//   tertiary: {
//     light: 'var(--bob-core-components-color-light-grey)',
//     dark: 'var(--bob-core-components-color-light-grey)',
//   },
//   success: {
//     light: 'var(--bob-core-components-color-success)',
//     dark: 'var(--bob-core-components-color-success)',
//   },
//   warning: {
//     light: 'var(--bob-core-components-color-rosso60)',
//     dark: 'var(--bob-core-components-color-rosso60)',
//   },
// });
//
// const secondaryTint = theme.variants('mode', 'color', {
//   primary: {
//     light: 'var(--bob-core-components-color-yellow)',
//     dark: 'var(--bob-core-components-color-yellow)',
//   },
//   tertiary: {
//     light: 'var(--bob-core-components-color-light-grey)',
//     dark: 'var(--bob-core-components-color-light-grey)',
//   },
//   success: {
//     light: 'var(--bob-core-components-color-success)',
//     dark: 'var(--bob-core-components-color-success)',
//   },
//   warning: {
//     light: 'var(--bob-core-components-color-rosso60)',
//     dark: 'var(--bob-core-components-color-rosso60)',
//   },
// });
//
// const tertiaryTint = theme.variants('mode', 'color', {
//   primary: {
//     light: 'var(--bob-core-components-color-mint-darken)',
//     dark: 'var(--bob-core-components-color-mint-darken)',
//   },
//   tertiary: {
//     light: 'var(--bob-core-components-color-light-grey)',
//     dark: 'var(--bob-core-components-color-light-grey)',
//   },
//   success: {
//     light: 'var(--bob-core-components-color-success)',
//     dark: 'var(--bob-core-components-color-success)',
//   },
//   warning: {
//     light: 'var(--bob-core-components-color-rosso60)',
//     dark: 'var(--bob-core-components-color-rosso60)',
//   },
// });

// export const sizes = {
//   'xxx-large': '8rem',
//   'xx-large': '7rem',
//   'x-large-1': '4rem',
//   'x-large': '3rem',
//   large: '2rem',
//   medium: '1.5rem',
//   small: '1rem',
//   'x-small': '0.75rem',
//   'xx-small': '0.5rem',
// } as const;

const getSize = ({ size, theme }: Partial<IProps>): string => (size ? theme?.variables?.sizes.icon.sizes[size] as string : '');

const getRoundCss = ({
  round,
}: IProps) =>
  round
    ? css<Partial<IProps>>`
        display: inline-block;
        border-radius: 50%;
        background-color: ${({theme}) => theme.variables.colors.snow};
        box-shadow: 0 0 ${({theme}) => theme.variables.sizes.padding} ${({theme}) => theme.variables.colors['flow-button-shadow']};
        padding: ${({theme}) => theme.variables.sizes.halfPadding};
        margin: ${({theme}) => theme.variables.sizes.halfPadding};
        width: calc(${getSize} + ${({theme}) => theme.variables.sizes.padding}); // padding both sides
        height: calc(${getSize} + ${({theme}) => theme.variables.sizes.padding}); // padding both sides
      `
    : css``;

const iconCss = css<IProps>`
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
