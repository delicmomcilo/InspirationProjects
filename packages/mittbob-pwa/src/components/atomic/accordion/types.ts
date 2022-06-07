import { ReactNode, ReactNodeArray, SyntheticEvent } from 'react';

export interface IProps {
  title: string;
  open?: boolean;
  onClose?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  children: ReactNode | ReactNodeArray;
}

export interface MotionProps {
  open: boolean;
}
