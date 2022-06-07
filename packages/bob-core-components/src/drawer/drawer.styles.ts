import styled from "styled-components";
import { motion } from '../framerMotion'
import Card from "../Card";
import Button from "../Button";
import { IProps } from './drawer.types';

export const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #eee;
`;

export const CloseButtonContainer = styled(motion.div)`
  position: absolute;
  ${({ direction = 'left'}: Partial<IProps>) => direction === 'left' ? 'right: 0' : 'left: 0'};
  top: 0;
`;
export const CloseButton = styled(Button).attrs(() => ({
  variant: "icon",
  fitContent: true,
  iconProps: { round: false, size: "small" },
  iconName: "Close"
}))`
  padding: ${({ theme }) => theme.variables.sizes.halfPadding};
`;

export const Container = styled(Card)`
  height: 100%;
`;

export const Aside = styled(motion.aside)`
  width: 20rem;
  height: 100%;
  position: absolute;
  top: 0;
  ${({ direction }: Partial<IProps>) => direction === "right" && "right: -20rem"};
  bottom: 0;
`;
