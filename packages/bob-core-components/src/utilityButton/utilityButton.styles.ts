import styled, { css } from "styled-components";
import { motion, MotionProps } from 'framer-motion';

export const styles = css`
  position: absolute;
  padding: 0;
  top: ${({ theme }) => theme.variables.sizes.utilityButton.top};
  width: ${({ theme }) => theme.variables.sizes.utilityButton.height};
  height: ${({ theme }) => theme.variables.sizes.utilityButton.height};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 50%;
  box-shadow: 0 0 ${({ theme }) => theme.variables.sizes.padding}
    ${({ theme }) => theme.variables.colors.ash};
  outline: none;
  cursor: pointer;
  border: ${({ theme }) => theme.variables.sizes.fourthOfPadding} solid
    ${({ theme }) => theme.variables.colors.snow};
  background-color: ${({ theme }) => theme.variables.colors.violet};
  &:focus {
    box-shadow: 0 0 ${({ theme }) => theme.variables.sizes.fourthOfPadding}
      ${({ theme }) => theme.variables.colors.violet};
    background-color: ${({ theme }) => theme.variables.colors["violet80"]};
  }
  &:active {
    box-shadow: 0 0 ${({ theme }) => theme.variables.sizes.fourthOfPadding}
      ${({ theme }) => theme.variables.colors.ash};
    background-color: ${({ theme }) => theme.variables.colors["violet80"]};
  }
`;

export const MotionComponent = styled(motion.button)`
  ${styles};
`;

export const Component = styled.button`
  ${styles};
`;
