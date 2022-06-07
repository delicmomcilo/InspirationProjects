import { ReactNode, ReactNodeArray } from 'react';
import { DefaultTheme } from 'styled-components';
import { IStyledTypography as TypographyProps } from '../typography/typography.types'

export interface IProps {
  title?: string;
  open?: boolean;
  noCard?: boolean;
  noButton?: boolean;
  children: ReactNode | ReactNodeArray;
  titleProps?: Partial<TypographyProps>
}

export interface MotionProps {
  open: boolean;
  theme: DefaultTheme
}
