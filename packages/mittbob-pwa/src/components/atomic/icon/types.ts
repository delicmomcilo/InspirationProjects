import { sizes } from './icon.styles';
import icons from './icons';

export type IconNames = keyof typeof icons;

export interface IProps {
  name: IconNames;
  size?: keyof typeof sizes;
  round?: boolean;
  color?: string;
}

type Colors = 'primary' | 'warning';

export type IconSizes = keyof typeof sizes;

export interface IStyledIcon {
  size: keyof typeof sizes;
  color: Colors;
  round?: boolean;
}
