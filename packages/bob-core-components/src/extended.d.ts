import "styled-components";
import { breakpoints, progressIndicatorCircleSizes } from './theme/variables';

export type ConvertedFontSizes = {
  "xxx-large": string
  "xx-large": string
  "x-large": string
  "large-2": string
  large: string
  "medium-1": string
  medium: string
  defaultSize: string
  small: string
  "x-small": string
};

export type IconSizes = {
  'xxx-large': string,
  'xx-large': string,
  'x-large-1': string,
  'x-large': string,
  large: string,
  medium: string,
  small: string,
  'x-small': string,
  'xx-small': string,
}

export type ProgressIndicatorCircleSizes = {
  'x-small': string,
  small: string,
  medium: string,
  large: string,
  'x-large': string,
  'xx-large': string
}

export type ConvertedSizes = {
  adornmentWidth: string,
  fontSizes: ConvertedFontSizes,
  gutterBottom: string,
  onePx: string,
  twoPx: string,
  fourPx: string,
  sixPx: string,
  eightPx: string,
  tenPx: string,
  twelvePx: string,
  fourteenPx: string,
  sixteenPx: string,
  padding: string,
  doublePadding: string,
  halfPadding: string,
  fourthOfPadding: string,
  inputHeight: string,
  accordion: {
    minHeight: string,
    buttonAnimation: {
      height: string,
      width: string
    }
  },
  slider: {
    height: string,
    buttonTop: string
  },
  card: {
    minHeight: string,
    imageMaxHeight: string
  },
  button: {
    arrowContainerHeight: string,
    primary: {
      borderRadius: string
    },
    senary: {
      width: string
    },
    tertiary: {
      arrowContainerWidth: string
    }
  },
  progressIndicator: {
    circle: {
      strokeWidth: string,
      sizes: ProgressIndicatorCircleSizes
    }
  },
  icon: {
    sizes: IconSizes
  },
  switch: {
    height: string,
    width: string,
    borderRadius: string,
  },
  utilityButton: {
    width: string,
    height: string,
    top: string
  },
  list: {
    item: {
      shadowBlur: string,
      shadowOffsetX: string
    }
  },
  modalDialog: {
    backdropBlur: string,
    headerSvgMargin: string
  }
};

type Breakpoints = typeof breakpoints

interface ExtendedBreakpoints extends Breakpoints {
  up: (key: keyof Breakpoints) => string
}

declare module "styled-components" {

  export interface DefaultTheme {
    variables: {
      colors: { [key: string]: string };
      sizes:  ConvertedSizes
    };
    breakpoints: ExtendedBreakpoints;
    spacing: (value: number) => string;
    __BOB_CORE_COMPONENTS_THEME_PROVIDER__: boolean;
  }
}
