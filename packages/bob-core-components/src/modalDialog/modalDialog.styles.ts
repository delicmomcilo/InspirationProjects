import styled, { css, keyframes } from "styled-components";
import Card from "../Card";
import { IProps, AnimateArgs } from "./modalDialog.types";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const moveIn = keyframes`
  from {
    transform: translateY(500%);
  }

  to {
    transform: translateY(0);
  }
`;

const moveOut = keyframes`
  from {
    transform: translateY();
  }

  to {
    transform: translateY(500%);
  }
`;

export const animate = ({ animationState }: AnimateArgs) => {
  // if (animationState === 'entered') {
  //   return css` display: flex`;
  // }
  if (animationState === "entering" || animationState === "entered") {
    return css`
      display: flex;
      animation: ${fadeIn} 250ms cubic-bezier(0.78, 0.02, 0.58, 1) forwards;
      ${StyledModalDialog} {
        animation-delay: 100ms;
        animation: ${moveIn} 250ms cubic-bezier(0.78, 0.02, 0.58, 1) forwards;
      }
    `;
  }
  if (animationState === "exiting") {
    return css`
      animation-delay: 100ms;
      animation: ${fadeOut} 250ms cubic-bezier(0.78, 0.02, 0.58, 1) forwards;
      ${StyledModalDialog} {
        animation: ${moveOut} 250ms cubic-bezier(0.78, 0.02, 0.58, 1) forwards;
      }
    `;
  }
  return css`
    display: none !important;
  `;
};

// export const StyledModalDialog = styled.div`
//   width: 85%;
//   max-width: 40rem;
//   overflow-y: auto;
//   background-color: var(--bob-core-components-color-mist20);
//   margin: 2rem auto;
//   box-shadow: 0 0 3rem 0.7rem rgba(0, 0, 0, 0.2);
//   border-radius: 0.625rem;
//   padding: 1rem;
// `;

export const StyledModalDialog = styled(Card)`
  width: 85%;
  max-width: 40rem;
  max-height: 80vh;
  & p + p {
    margin-top: ${({ theme }) => theme.variables.sizes.padding};
  }
`;

export const ModalDialogBackdrop = styled.div`
  z-index: 100;
  backdrop-filter: blur(
    ${({ theme }) => theme.variables.sizes.modalDialog.backdropBlur}
  );
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 100%;
  width: 100%;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.4);
  ${animate};
`;

export const ChildrenContainer = styled.div<Partial<IProps>>`
  display: flex;
  ${({ justifyChildren }) =>
    justifyChildren && `justify-content: ${justifyChildren}`};
  ${({ alignChildren }) => alignChildren && `align-items: ${alignChildren}`};
  ${({ childrenDirection = "column" }) =>
    `flex-direction: ${childrenDirection}`};
`;

export const ModalDialogHeader = styled(Card.Header)`
  > svg {
    margin-left: ${({ theme }) =>
      theme.variables.sizes.modalDialog.headerSvgMargin};
  }
`;
