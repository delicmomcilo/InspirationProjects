import { css } from 'styled-components';

const light = css`
  background-color: var(--bob-core-components-color-rosso60);
  box-shadow: 0 0.1875rem 0.375rem var(--bob-core-components-color-rosso80);
  &:hover,
  &:active,
  &:focus {
    background-color: var(--bob-core-components-color-rosso40);
    box-shadow: 0 0.1875rem 0.375rem var(--bob-core-components-color-rosso60);
  }
`;

const dark = css``;

export default { light, dark };
