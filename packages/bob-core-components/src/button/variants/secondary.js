import { css } from "styled-components";
import { getBtnSizeByText } from "../helpers";

const styles = css`
  outline: none;
  height: ${({ size }) => getBtnSizeByText(size)};
  padding: ${({ theme }) => theme.variables.sizes.padding};
  border-radius: ${({ theme }) =>
    theme.variables.sizes.button.primary.borderRadius};
`;

const dark = css``;

const light = css`
  ${styles};
  background-color: transparent;
  border: ${({ theme }) => theme.variables.sizes.twoPx} solid
    var(--bob-core-components-color-grain);
  &:hover {
    background-color: var(--bob-core-components-color-grain20);
  }
  &:focus {
    background-color: var(--bob-core-components-color-grain20);
    box-shadow: 0 0 ${({ theme }) => theme.variables.sizes.padding}
      var(--bob-core-components-color-violet40);
  }
  &:active {
    background-color: var(--bob-core-components-color-grain10);
    box-shadow: inset 0 ${({ theme }) => theme.variables.sizes.twoPx}
      ${({ theme }) => theme.variables.sizes.padding}
      var(--bob-core-components-color-grain);
  }
  &:disabled {
    background-color: var(--bob-core-components-color-grain40);
    color: var(--bob-core-components-color-eggplant40);
    cursor: default;
    pointer-events: none;
  }
`;

export default { dark, light };
