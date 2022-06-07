import { DefaultTheme } from "styled-components";
import variables from "./variables";
import {
  AnyObjectWithStringKeys,
  Converter,
  OverrideTheme,
  Sizes
} from "./types";
import { ConvertedSizes } from "../extended";

const fontSize = 16;
const coefficient = fontSize / 16; // Default rem size;
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createTypography.js
const pxToRem = (htmlFontSize = fontSize, size: number) =>
  `${(size / htmlFontSize) * coefficient}rem`;

const traverseSizes = (
  originalSizes: Partial<Sizes>,
  converter: Converter
): ConvertedSizes => {
  const sizes = { ...originalSizes };
  let converted: AnyObjectWithStringKeys = {};
  Object.keys(sizes).forEach(key => {
    if (Object.prototype.hasOwnProperty.call(sizes, key)) {
      const k = key as keyof Sizes;
      if (typeof sizes[k] === "object") {
        converted[k] = traverseSizes(sizes[k] as Partial<Sizes>, converter);
      } else if (typeof sizes[k] === "number") {
        converted[k] = converter(sizes[k] as number);
      } else {
        throw new Error("Invalid format in variables object.");
      }
    }
  });
  return converted as ConvertedSizes;
};

//https://github.com/mui-org/material-ui/blob/master/packages/material-ui-utils/src/deepmerge.jshttps://github.com/mui-org/material-ui/blob/master/packages/material-ui-utils/src/deepmerge.js
function isPlainObject(item: object) {
  return item && typeof item === "object" && item.constructor === Object;
}
//https://github.com/mui-org/material-ui/blob/master/packages/material-ui-utils/src/deepmerge.js
function deepmerge(
  target: AnyObjectWithStringKeys,
  source: AnyObjectWithStringKeys,
  options = { clone: true }
) {
  const output = options.clone ? { ...target } : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      // Avoid prototype pollution
      if (key === "__proto__") {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

export const THEME_KEY = "__BOB_CORE_COMPONENTS_THEME_PROVIDER__";

export const createTheme = (theme: OverrideTheme): DefaultTheme => {
  const converter = theme?.pxToRem
    ? theme?.pxToRem
    : pxToRem.bind(pxToRem, theme?.htmlFontSize);
  const spacing = (value: number) => converter(8 * value);
  const defaultTheme = {
    [THEME_KEY]: true,
    mode: "light",
    spacing,
    breakpoints: variables.breakpoints,
    variables: {
      ...variables,
      sizes: traverseSizes(variables.sizes, converter)
    }
  };
  if (theme) {
    const overrides = JSON.parse(JSON.stringify(theme));
    if (overrides?.variables?.sizes) {
      overrides.variables.sizes = traverseSizes(
        overrides.variables.sizes,
        converter
      ) as DefaultTheme["variables"]["sizes"];
    }
    return deepmerge(defaultTheme, overrides, { clone: true }) as DefaultTheme;
  }
  return defaultTheme as DefaultTheme;
};
