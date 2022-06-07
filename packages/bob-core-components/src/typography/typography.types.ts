import { DefaultTheme } from 'styled-components';
import variables from '../theme/variables';
export interface IStyledTypography {
  textAlign: 'left' | 'right' | 'center' | 'justify' | 'inherit';
  children: string;
  color: string;
  size: keyof typeof variables.sizes.fontSizes;
  gutterBottom?: boolean;
  fontWeight: string;
  theme: DefaultTheme,
  component: string,
}
