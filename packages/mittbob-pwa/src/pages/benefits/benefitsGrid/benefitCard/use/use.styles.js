import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledUse = styled(motion.div)`
  border-radius: 0.5rem;
  height: 5rem;
  width: 100%;
  padding: 2.5rem 2rem 2rem 2rem;
  background-color: var(--bob-core-components-color-grain);
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 1rem 0 var(--bob-core-components-color-ash);
`;

export const StyledValidMember = styled(motion.div).attrs(() => ({
  className: 'bob-core-components-typography__bold--medium-1--violet',
}))`
  left: 0;
  top: 0;
  padding: 2rem;
  position: absolute;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bob-core-components-color-snow);
  box-shadow: 0 0 1rem 0 var(--bob-core-components-color-ash);
`;

export const StyledUseContainer = styled.div`
  position: relative;
`;

export const Test = styled.div`
  background-color: blue;
  height: 2rem;
  width: 4rem;
  left: 0;
  top: 0;
  padding: 2rem;
  position: absolute;
`;
