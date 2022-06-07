import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import * as variants from './variants';
import { variables as fonts } from '../typography/config';
import { NAME, ARROW_DIRECTION } from './constants';
import { getAnimatedRectLength, getRectLength } from './helpers';

const variantStyling = theme.variants('mode', 'variant', {
  default: variants.primary,
  ...variants,
});

export const TextSpan = styled.span.attrs(() => ({
  className: `${NAME}__textspan`,
}))`
  vertical-align: text-top;
  display: inline-block;
`;

export const IconContainer = styled.span.attrs(() => ({
  className: `${NAME}__icon-container`,
}))`
  z-index: 0;
`;
export const ContentSpan = styled.span.attrs(() => ({
  className: `${NAME}__contentspan`,
}))`
  display: inline-flex;
  align-items: center;
`;

export const ArrowContainer = styled.span.attrs(() => ({
  className: `${NAME}__arrow-container`,
}))`
  height: ${({theme}) => theme.variables.sizes.button.arrowContainerHeight};
  width: ${({theme}) => theme.variables.sizes.button.arrowContainerHeight};
  svg {
    height: ${({theme}) => theme.variables.sizes.button.arrowContainerHeight};
    width: ${({theme}) => theme.variables.sizes.button.arrowContainerHeight};
    rect {
      transition: width 300ms cubic-bezier(0.78, 0.02, 0.58, 1);
    }
    path {
      transition: transform 300ms cubic-bezier(0.78, 0.02, 0.58, 1);
    }
  }
`;

// Hack to show text above yellow animated background. SHould be other way to do it, but demo time.
export const TextContainerSpan = styled.span.attrs(() => ({
  className: `${NAME}__textcontainerspan`,
}))`
  ${({ direction, showArrow }) => {
    if (!showArrow) return '';
    switch (direction) {
      case ARROW_DIRECTION.RIGHT:
        return css`
          margin-left: ${({theme}) => theme.variables.sizes.padding};
          ${TextSpan} {
            padding-right: ${({theme}) => theme.variables.sizes.halfPadding};
          }
        `;
      case ARROW_DIRECTION.LEFT:
        return css`
          margin-right: ${({theme}) => theme.variables.sizes.padding};
          ${TextSpan} {
            padding-left: ${({theme}) => theme.variables.sizes.halfPadding};
          }
        `;
      default:
        return '';
    }
  }};
  z-index: 0;
  display: inline-flex;
  align-items: center;

  ${ArrowContainer} {
    svg {
      rect {
        width: ${getRectLength};
      }
      path {
        transform: translateX(${getRectLength});
      }
    }
    ${({ position }) =>
      position === 'left' &&
      css`
        order: -1;
      `}
    ${({ direction }) =>
      direction === ARROW_DIRECTION.LEFT
        ? css`
            transform: rotate(180deg);
          `
        : direction === ARROW_DIRECTION.DOWN
        ? css`
            transform: rotate(90deg);
          `
        : direction === ARROW_DIRECTION.UP
        ? css`
            transform: rotate(270deg);
          `
        : ''};
  }
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
  ${fonts['bob-core-components-typography__semibold--medium-1--coal']};
  text-align: center;
  ${({ fitContent }) => fitContent && 'width: fit-content'};

  &:hover,
  &:active,
  &:focus {
    ${ArrowContainer} {
      svg {
        rect {
          width: ${getAnimatedRectLength};
        }
        path {
          transform: translateX(${getAnimatedRectLength});
        }
      }
    }
  }
  &:disabled {
    ${ArrowContainer} {
      fill: var(--bob-core-components-color-eggplant40);
    }
  }
  ${({ loading }) =>
    loading &&
    css`
      ${TextContainerSpan} {
        margin-right: ${({theme}) => theme.variables.sizes.padding};
      }
    `}
  ${variantStyling}
`;
