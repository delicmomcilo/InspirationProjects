import styled from "styled-components";
import { motion } from '../framerMotion'
import { AnimationProps} from './autocomplete.types';
import C from "../Card";
import { ScrollableContent } from '../card/card.styles';



export const Card = styled(C)`
  ${ScrollableContent} {
    padding: 0;
  }  overflow: visible;
  min-height: 0;
  > * {
    &:first-child {
      > li {
        overflow: hidden;
        &:first-child {
          border-top-right-radius: ${({theme}) => theme.variables.sizes.fourthOfPadding};
          border-top-left-radius: ${({theme}) => theme.variables.sizes.fourthOfPadding};
        }
        &:last-child {
          border-bottom-right-radius: ${({theme}) => theme.variables.sizes.fourthOfPadding};
          border-bottom-left-radius: ${({theme}) => theme.variables.sizes.fourthOfPadding};
        }
      }
    }
  }
`;

export const Container = styled.div``;

export const SelectListContainer = styled(motion.div).attrs<AnimationProps >(
  ({ open }): any => ({
      // QuickFix #1487: Disable animations for now. Text is distorted.
    // layout: true,
    // initial: { height: open ? "auto" : 0 },
    // initial: { height: "auto"},
    // animate: false,
    // exit: { height: 0 }
  })
)<AnimationProps>`
  margin-top: ${({theme}) => theme.variables.sizes.twoPx};
  font-size: ${({theme}) => theme.variables.sizes.fontSizes.medium}; // as input
  ${({ disabled}) => disabled && 'pointer-events: none'};
`;

export const AnimationContainer = styled(motion.div)``;
