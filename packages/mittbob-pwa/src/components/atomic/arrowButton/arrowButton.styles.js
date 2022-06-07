import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { getAnimatedRectLength, getRectLength } from '../button/helpers';
import { ARROW_POSITION } from '../button/constants';

export const ArrowContainer = styled.span`
  display: inline-flex;
  svg {
    rect {
      transition: width 300ms cubic-bezier(0.78, 0.02, 0.58, 1);
    }
    path {
      transition: transform 300ms cubic-bezier(0.78, 0.02, 0.58, 1);
    }
  }
`;

const fill = theme.variants('mode', 'color', {
  default: { light: 'gray', dark: 'darkgray' },
  primary: {
    light: 'var(--bob-core-components-color-violet)',
    dark: 'var(--bob-core-components-color-snow)',
  },
  secondary: {
    light: 'var(--bob-core-components-color-snow)',
    dark: 'var(--bob-core-components-color-snow)',
  },
});

export const StyledButton = styled.button`
  outline: none;
  background-color: transparent;
  display: inline-flex;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  ${({ fitContent }) => fitContent && 'width: fit-content'};
  ${ArrowContainer} {
    ${({ direction = ARROW_POSITION.RIGHT }) => {
      if (direction === ARROW_POSITION.LEFT) {
        return css`
          transform: rotate(180deg);
        `;
      }
      return '';
    }}
    overflow: visible;
    svg {
      overflow: visible;
      width: ${getAnimatedRectLength};

      fill: ${fill};
      rect {
        width: ${getRectLength};
      }
      path {
        transform: translateX(${getRectLength});
      }
    }
  }

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
    pointer-events: none;
    ${ArrowContainer} {
      fill: var(--bob-core-components-color-eggplant40);
    }
  }
`;
