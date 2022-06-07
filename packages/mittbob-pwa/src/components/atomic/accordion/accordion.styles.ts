import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MotionProps } from './types';

export const Details = styled(motion.div).attrs(({ open }: MotionProps) => ({
  layout: true,
  initial: { height: 0 },
  animate: { height: open ? 'auto' : 0 },
  exit: { height: 0 },
}))<MotionProps>`
  overflow: hidden;
`;

export const AnimationContainer = styled(motion.div)``;
export const ButtonAnimation = styled(motion.div).attrs(({ open }: MotionProps) => ({
  style: { width: '2rem', height: '2rem' },
  initial: { originX: 0.5, rotate: 90 },
  animate: { originX: 0.5, rotate: open ? 270 : 90 },
  exit: { originX: 0.5, rotate: 90 },
}))<MotionProps>``;

export const Summary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
