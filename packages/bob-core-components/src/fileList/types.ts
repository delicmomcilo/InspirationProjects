import { DefaultTheme } from 'styled-components';

export interface IProps {
  preview?: boolean;
  files?: ReadonlyArray<File>;
  labelKey?: 'name'; // May be extended at some point when accepting more than type File
  emptyMessage?: string;
  onRemove: (f: File) => void;
  imageMaxWidth?: string;
}

export type Preview = Record<string, string>;

export interface IStyledItem {
  preview?: boolean;
}

export interface IStyledImg {
  maxWidth?: string;
}

export type IButtonGrid = { hasImage?: boolean; theme: DefaultTheme };