import cssVarColorVariables from "./colors/variables";
import { Color } from "./types";

export const colors: { [key: string]: string} = Object.keys(cssVarColorVariables).reduce((acc, key) => {
  const k = key as Color;
  const newKey = k.split("--bob-core-components-color-")[1];

  return { ...acc, [newKey]: cssVarColorVariables[k] };
}, {});

export const fontSizes = {
  "xxx-large": 60,
  "xx-large": 36,
  "x-large": 30,
  "large-2": 24,
  large: 18,
  "medium-1": 16,
  medium: 14,
  defaultSize: 14,
  small: 12,
  "x-small": 10
};

const onePx = 1;
const twoPx = 2;
const fourPx = 4;
const sixPx = 6;
const eightPx = 8;
const tenPx = 10;
const twelvePx = 12;
const fourteenPx = 14;
const sixteenPx = 16;

const gutterBottom = eightPx;
const padding = sixteenPx;
const halfPadding = padding / 2;
const fourthOfPadding = padding / 4;
const doublePadding = 2 * padding;
const inputHeight = sixteenPx * 3;
const adornmentWidth = sixteenPx * 2 + eightPx;

export const iconSizes = {
  'xxx-large': sixteenPx * 8,
  'xx-large': sixteenPx * 7,
  'x-large-1': sixteenPx * 4,
  'x-large': sixteenPx * 3,
  large: sixteenPx * 2,
  medium: sixteenPx * 1.5,
  small: sixteenPx,
  'x-small': sixteenPx * 0.75,
  'xx-small': sixteenPx / 2,
};

export const progressIndicatorCircleSizes = {
  'x-small': eightPx,
  small: sixteenPx,
  medium: sixteenPx * 1.5,
  large: sixteenPx * 2,
  'x-large': sixteenPx * 4,
  'xx-large': sixteenPx * 8
}

export const sizes = {
  adornmentWidth,
  fontSizes,
  gutterBottom,
  onePx,
  twoPx,
  fourPx,
  sixPx,
  eightPx,
  tenPx,
  twelvePx,
  fourteenPx,
  sixteenPx,
  padding,
  doublePadding,
  halfPadding,
  fourthOfPadding,
  inputHeight,
  accordion: {
    minHeight: sixteenPx * 3,
    buttonAnimation: {
      height: sixteenPx * 2,
      width: sixteenPx * 2
    }
  },
  slider: {
    height: sixteenPx * 1.625,
    buttonTop: sixteenPx * -0.5625
  },
  card: {
    minHeight: sixteenPx * 5,
    imageMaxHeight: sixteenPx * 15
  },
  button: {
    arrowContainerHeight: sixteenPx,
    primary: {
      borderRadius: sixteenPx * 3
    },
    senary: {
      width: sixteenPx * 16
    },
    tertiary: {
      arrowContainerWidth: sixteenPx * 1.6
    }
  },
  progressIndicator: {
    circle: {
      strokeWidth: sixteenPx,
      sizes: progressIndicatorCircleSizes
    }
  },
  icon: {
    sizes: iconSizes
  },
  list: {
    item: {
      shadowBlur: sixteenPx * -2.7,
      shadowOffsetX: sixteenPx * 3
    }
  },
  switch: {
    height: sixteenPx * 1.625,
    width: sixteenPx * 3,
    borderRadius: sixteenPx
  },
  utilityButton: {
    height: sixteenPx * 1.625,
    width: sixteenPx * 1.625,
    top: sixteenPx * -0.5625
  },
  modalDialog: {
    backdropBlur: sixteenPx * 0.3125,
    headerSvgMargin: sixteenPx * 1.5
  }
} as const;

export const breakpoints = {
  'xs': 0,
  'sm': 600,
  'md': 960,
  'lg': 1280,
  'xl': 1920
};

const breakpointUp = (key: keyof typeof breakpoints) => `@media (min-width:${breakpoints[key]}px)`;

export default {
  sizes,
  colors,
  breakpoints: {
    ...breakpoints,
    up: breakpointUp
  },
};
