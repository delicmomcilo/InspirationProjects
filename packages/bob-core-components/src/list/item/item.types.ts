import { ReactNode } from 'react';
import { DefaultTheme } from "styled-components";
import { SyntheticEvent } from 'react';

export interface IListItem {
  children?: ReactNode,
  dense?: boolean,
  icon?: ReactNode,
  subtitle?: string,
  title?: string,
  success?: boolean,
  warning?: boolean,
  selected?: boolean,
}

export interface IListAnchorItem extends IListItem {
  to?: string,
  onClick?: (e: SyntheticEvent<HTMLAnchorElement>) => void,
}

export interface IListItemContent {
  children?: ReactNode,
  dense?: boolean,
  icon?: ReactNode,
  subtitle?: string,
  title?: string,
  success?: boolean,
  warning?: boolean,
}

export interface IListItemIcon {
  icon?: ReactNode,
  dense?: boolean,
}

export interface IDisplayIcon {
  show?: boolean,
  dense?: boolean,
}

export interface IIconContainer {
  dense?: boolean,
  theme?: DefaultTheme
}

export interface IStyledContent {
  dense?: boolean,
  theme?: DefaultTheme,
  selected?: boolean
}
