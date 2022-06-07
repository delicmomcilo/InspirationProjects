import { css } from "styled-components";
import { ARROW_LENGTH, NAME } from "../constants";
import { getAnimatedRectLength, getRectLength } from "../helpers";

const style = css`
  position: relative;
  z-index: 0;

  ${`.${NAME}__textspan`} {
    margin: 0;
    padding-right: 0;
  }
  ${`.${NAME}__contentspan`} {
    position: relative;

    &:before {
      transition: height cubic-bezier(0.78, 0.02, 0.58, 1) 250ms;
      content: "";
      position: absolute;
      width: 100%;
      display: block;
      height: ${({ theme }) => theme.variables.sizes.twoPx};
      bottom: 0;
      left: 0;
      background-color: var(--bob-core-components-color-grain);
    }
  }
  ${`.${NAME}__arrow-container`} {
    margin: 0;
    width: ${({ theme }) =>
      theme.variables.sizes.button.tertiary.arrowContainerWidth};
    svg {
      width: ${({ theme }) =>
        theme.variables.sizes.button.tertiary.arrowContainerWidth};
      rect {
        width: ${getRectLength({ arrowLength: ARROW_LENGTH.MEDIUM })};
      }
      path {
        transform: translateX(
          ${getRectLength({ arrowLength: ARROW_LENGTH.MEDIUM })}
        );
      }
    }
  }
  &:hover,
  &:focus,
  &:active {
    ${`.${NAME}__contentspan`} {
      &:before {
        height: 50%;
      }
    }
    ${`.${NAME}__arrow-container`} {
      margin: 0;
      svg {
        rect {
          width: ${getAnimatedRectLength({ arrowLength: ARROW_LENGTH.MEDIUM })};
        }
        path {
          transform: translateX(
            ${getAnimatedRectLength({ arrowLength: ARROW_LENGTH.MEDIUM })}
          );
        }
      }
    }
  }
  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

const dark = css``;

const light = css`
  ${style};
  background-color: transparent;
`;

export default { dark, light };
