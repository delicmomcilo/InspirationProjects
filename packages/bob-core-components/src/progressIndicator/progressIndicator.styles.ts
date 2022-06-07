import styled from "styled-components";
import { motion } from "framer-motion";
import { IProps } from "./progressIndicator.types";

export const Container = styled(motion.svg)<Partial<IProps>>`
  width: ${({ size = 'medium', theme }) =>
    theme.variables.sizes.progressIndicator.circle.sizes[size]};
  height: ${({ size = 'medium', theme }) =>
    theme.variables.sizes.progressIndicator.circle.sizes[size]};
`;

export const Circle = styled(motion.path)`
  fill: none;
  stroke: ${({ theme }) => theme.variables.colors.violet};
  stroke-width: ${({ theme }) =>
    theme.variables.sizes.progressIndicator.circle.strokeWidth};
  stroke-linecap: round;
`;

export const BackgroundCircle = styled(motion.path)`
  fill: none;
  stroke: ${({ theme }) => theme.variables.colors.violet20};
  stroke-width: ${({ theme }) =>
    theme.variables.sizes.progressIndicator.circle.strokeWidth};
`;
