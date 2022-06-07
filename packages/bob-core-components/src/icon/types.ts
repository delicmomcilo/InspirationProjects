// import { sizes } from './icon.styles';
import icons from './icons';
import variables from '../theme/variables';
import { DefaultTheme } from 'styled-components';

export type IconNames = keyof typeof icons;
export type IconSizes = keyof typeof variables.sizes.icon.sizes;
export interface IProps {
  name: IconNames;
  size?: IconSizes;
  round?: boolean;
  color?: Colors;
  theme: DefaultTheme
}

type Colors = 'primary' | 'warning';

// export type IconSizes = keyof typeof sizes;

export interface IStyledIcon {
  size: keyof typeof variables.sizes.icon.sizes;
  color: Colors;
  round?: boolean;
}
