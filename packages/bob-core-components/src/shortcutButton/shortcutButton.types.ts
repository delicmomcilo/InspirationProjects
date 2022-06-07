import icons from '../icon/icons';
import {IProps as IconProps} from '../icon/types';
import { SyntheticEvent } from 'react';

export interface IProps {
  iconName?: keyof typeof icons;
  label: string,
  lowerRightIcon?: keyof typeof icons;
  number?: number,
  showGreenDot?: boolean,
  disabled?: boolean,
  iconProps?: IconProps,
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void
}