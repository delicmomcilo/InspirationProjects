import { ReactNode } from 'react';

export interface IProps {
  onClose?: () => void,
  direction?: 'left' | 'right',
  staggerChildren?: boolean
  children?: ReactNode,
  open?: boolean
}