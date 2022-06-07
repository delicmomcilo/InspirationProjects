import { ReactNode } from 'react';

export interface IProps {
  children: Array<JSX.Element>,
  onSelect: (val: string) => void
}