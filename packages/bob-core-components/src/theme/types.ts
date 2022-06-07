import colors from "./colors/variables";
import { DefaultTheme } from "styled-components";
import { ReactNode } from "react";
import { sizes } from "./variables";

export type Color = keyof typeof colors;

export interface IBOBCCThemeProvider {
  theme?: any;
  children: ReactNode;
}


export type Converter = (size: Number) => string;
export type Sizes = typeof sizes
// export type Sizes = { [key: string]: number | Sizes };
export type AnyObjectWithStringKeys = { [key: string]: any };
export type OverrideTheme = AnyObjectWithStringKeys;
