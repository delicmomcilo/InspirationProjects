import styled, { css } from 'styled-components';
import { motion } from '../framerMotion'
import Card from '../Card';

export const Perspective = styled.div`
  perspective: ${({ perspective = 2000 }) => `${perspective}px`};
`;

export const Container = styled(motion.div)`
  //width: 18rem;
  transform-style: preserve-3d;
  display: flex;
  flex-flow: row nowrap;
  > * {
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
`;

export const SideContainer = styled.div`
  display: flex;
  width: 100%;
  ${({ backside = false }) =>
    backside &&
    css`
      transform: rotateY(180deg);
      margin-left: -100%;
      flex: none;
      width: 100%;
    `};
`;

export const Backside = styled(Card)``;

export const Frontside = styled(Card)``;

export const CardLogo = styled.div`
  max-width: 18rem;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: center;
  background-color: var(--bob-core-components-color-snow);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;
export const CardHeader = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__bold--large--snow',
}))`
  padding: 0.5rem 2rem;
  text-align: center;
  background-color: var(--bob-core-components-color-violet-darker);
`;
export const CardContent = styled.div`
  padding: 2rem;
`;
export const CardActions = styled.div`
  margin-top: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  align-items: flex-end;
`;
