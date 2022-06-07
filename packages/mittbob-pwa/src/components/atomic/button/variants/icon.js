import { css } from 'styled-components';

const styles = css`
  outline: none;
  //border-radius: 3rem;
`;

const dark = css``;

const light = css`
  ${styles};
  background-color: transparent;
  &:hover {
    svg {
      opacity: 0.8;
    }
  }
  &:focus {
    svg {
      opacity: 0.5;
    }
  }
  &:active {
    svg {
      opacity: 0.5;
    }
  }
  &:disabled {
    svg {
      opacity: 0.3;
    }
    cursor: default;
    pointer-events: none;
  }
`;

export default { dark, light };
