import { css } from 'styled-components';
import { media } from '../../../app/app.styles';

const light = css`
  div[data-type='links'] {
    a,
    h2 {
      color: var(--bob-core-components-color-snow);
    }
    svg {
      fill: var(--bob-core-components-color-snow);
    }

    .bob-core-components__button__textspan {
      color: var(--bob-core-components-color-snow);
    }
    ${media.app} {
      transform: none;
      padding: 0;
    }
  }
  background-color: var(--bob-core-components-color-violet-darker);
  justify-content: flex-end;
  border-radius: 0.5rem;
`;

const dark = css``;

export default { dark, light };
