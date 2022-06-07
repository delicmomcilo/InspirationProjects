import { css } from 'styled-components';

const light = css`
  color: var(--bob-core-components-color-link-light);
  &:hover,
  &:focus {
    color: var(--bob-core-components-color-mint-darken);
  }
  &:active {
    color: var(--bob-core-components-color-link-light);
  }
  &:visited {
    color: var(--bob-core-components-color-link-light-visited);
  }
`;
const dark = css`
  color: var(--bob-core-components-color-link-dark);
  &:hover,
  &:focus {
    color: var(--bob-core-components-color-mint);
  }
  &:active {
    color: var(--bob-core-components-color-link-dark);
  }
  &:visited {
    color: var(--bob-core-components-color-link-dark-visited);
  }
`;

export default { dark, light };
