import { css } from "styled-components";
import { NAME } from "../constants";
import { getAnimatedRectLength } from "../helpers";

const style = css`
  display: inline-block;
  ${`.${NAME}__contentspan`} {
    margin: ${({ theme }) => theme.variables.sizes.halfPadding};
  }
  ${`.${NAME}__textspan`} {
    ${({ showArrow }) =>
      showArrow &&
      css`
        text-decoration: underline;
      `}
  }
  ${`.${NAME}__arrow-container`} {
    svg {
      rect {
        width: ${getAnimatedRectLength};
      }
      path {
        transform: translateX(${getAnimatedRectLength});
      }
    }
  }
`;

const dark = css``;

const light = css`
  ${style};
  background-color: transparent;
`;

export default { dark, light };
