import { IconNames } from '../icon/types';

export interface IProps {
  title: string;
  text?: string;
  iconName?: IconNames;
  iconProps?: Record<string, any>;
}
