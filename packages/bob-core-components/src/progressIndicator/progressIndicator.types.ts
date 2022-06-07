import { progressIndicatorCircleSizes} from '../theme/variables';
import { DefaultTheme } from 'styled-components';

export interface IProps {
  circular?: boolean;
  size?: keyof typeof progressIndicatorCircleSizes
  theme?: DefaultTheme
  className?: string
}