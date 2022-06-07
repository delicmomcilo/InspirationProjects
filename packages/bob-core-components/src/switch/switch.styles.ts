import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import UtilityButton from "../UtilityButton";
import { IProps } from "./switch.types";

export const Container = styled(motion.div)<IProps>`
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
      cursor: default;
    `};
  position: relative;
  border-radius: ${({ theme }) => theme.variables.sizes.switch.borderRadius};
  width: ${({ theme }) => theme.variables.sizes.switch.width};
  height: ${({ theme }) => theme.variables.sizes.switch.height};
`;

export const OverlayButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
`;

export const ButtonContainer = styled(motion.div)`
  width: ${({ theme }) => theme.variables.sizes.utilityButton.width};
  height: ${({ theme }) => theme.variables.sizes.utilityButton.height};
`;

export const Button = styled(UtilityButton)`
  position: relative;
  top: 0;
`;

export const Circle = styled(motion.div)`
  position: absolute;
`;
