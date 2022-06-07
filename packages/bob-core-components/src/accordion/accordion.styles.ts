import styled, { DefaultTheme } from "styled-components";
import { motion } from "../framerMotion";
import { MotionProps } from "./types";
import C from "../Card";
import { ScrollableContent } from "../card/card.styles";

export const Details = styled(motion.div)`
  overflow: hidden;
`;

export const Card = styled(C)<DefaultTheme>`
  ${ScrollableContent} {
    padding: ${({ theme }) => theme.variables.sizes.halfPadding}
      ${({ theme }) => theme.variables.sizes.padding};
  }

  min-height: ${({ theme }) => theme.variables.sizes.accordion.minHeight};
`;

export const AnimationContainer = styled(motion.div).attrs(() => ({
  initial: false
}))``;
export const ButtonAnimation = styled(motion.div).attrs(
  ({ open, theme }: MotionProps) => ({
    style: {
      width: theme.variables.sizes.accordion.buttonAnimation.width,
      height: theme.variables.sizes.accordion.buttonAnimation.height
    },
    initial: { originX: 0.5, rotate: 90 },
    animate: { originX: 0.5, rotate: open ? 270 : 90 },
    exit: { originX: 0.5, rotate: 90 }
  })
)<MotionProps>``;

export const Summary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
