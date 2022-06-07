import { css, keyframes } from 'styled-components';
import { getBtnSizeByText } from '../helpers';

const styles = css`
  outline: none;
  height: ${({ size }) => getBtnSizeByText(size)};
  padding: ${({theme}) => theme.variables.sizes.padding};
  border-radius: ${({theme}) => theme.variables.sizes.button.primary.borderRadius};
`;

const fadeIn = keyframes`
  0% {
    background-color: var(--bob-core-components-color-grain);
  }
  50% {
    background-color: transparent;
  }
  100% {
    background-color: var(--bob-core-components-color-grain);
  }
`;

const dark = css``;

const light = css`
  ${styles};
  ${({ loading }) =>
    loading &&
    css`
      animation: 2s ${fadeIn} ease-in-out infinite;
    `};
  background-color: var(--bob-core-components-color-grain);
  border: ${({theme}) => theme.variables.sizes.twoPx} solid var(--bob-core-components-color-grain);
  &:hover {
    border: ${({theme}) => theme.variables.sizes.twoPx} solid var(--bob-core-components-color-grain60);
    background-color: var(--bob-core-components-color-grain60);
  }
  &:focus {
    border: ${({theme}) => theme.variables.sizes.twoPx} solid var(--bob-core-components-color-grain60);
    background-color: var(--bob-core-components-color-grain60);
    box-shadow: 0 0 ${({theme}) => theme.variables.sizes.padding} var(--bob-core-components-color-violet40);
  }
  &:active {
    background-color: var(--bob-core-components-color-grain);
    box-shadow: inset 0 ${({theme}) => theme.variables.sizes.twoPx} ${({theme}) => theme.variables.sizes.padding}
      var(--bob-core-components-color-grain-darker);
  }
  &:disabled {
    border: ${({theme}) => theme.variables.sizes.twoPx} solid var(--bob-core-components-color-grain40);
    background-color: var(--bob-core-components-color-grain40);
    color: var(--bob-core-components-color-eggplant40);
    cursor: default;
    pointer-events: none;
  }
`;

export default { dark, light };
