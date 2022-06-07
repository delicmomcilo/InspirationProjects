import { css } from 'styled-components';

const light = css`
  background-color: var(--bob-core-components-color-snow);
  box-shadow: 0 0.1875rem 0.375rem var(--bob-core-components-color-ash);
  &:hover,
  &:active,
  &:focus {
    background-color: var(--bob-core-components-color-platinum);
  }
`;

const dark = css``;

export default { light, dark };
