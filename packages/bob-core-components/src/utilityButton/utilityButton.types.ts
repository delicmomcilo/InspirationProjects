import { ComponentPropsWithoutRef } from 'react';
import { MotionProps } from 'framer-motion';

export interface Props extends ComponentPropsWithoutRef<'button'> {
  motion?: boolean
};

export type IProps = Props & MotionProps