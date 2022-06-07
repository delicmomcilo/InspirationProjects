import styled, { css, keyframes } from 'styled-components';
import theme from 'styled-theming';
import * as variants from './variants';

const variantStyling = theme.variants('mode', 'variant', {
  default: variants.primary,
  ...variants,
});

const moveIn = keyframes`
  from {
    height: 0;
    padding: 0 2rem;
  }

  to {
    height: 5rem;
    padding: 2rem;
  }
`;

const moveOut = keyframes`
  from {
    height: 5rem;
    padding: 2rem;
  }

  to {
    height: 0;
    padding: 0 2rem;
  }
`;

export const animate = ({ animationState }) => {
  if (animationState === 'entering' || animationState === 'entered') {
    return css`
      display: flex;
      animation: ${moveIn} 250ms cubic-bezier(0.78, 0.02, 0.58, 1) forwards;
    `;
  }
  if (animationState === 'exiting') {
    return css`
      animation: ${moveOut} 250ms cubic-bezier(0.78, 0.02, 0.58, 1) forwards;
    `;
  }
  return css`
    display: none;
  `;
};

export const StyledBanner = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  ${animate}
  ${variantStyling}
`;

export const Message = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

export const Actions = styled.div`
  display: flex;
  > * {
    &:first-child {
      margin-right: 1rem;
    }
  }
`;
