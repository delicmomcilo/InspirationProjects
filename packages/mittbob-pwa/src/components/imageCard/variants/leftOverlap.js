import { css } from 'styled-components';
import { media } from '../../../app/app.styles';

const light = css`
  div[data-type='links'] {
    left: 0.3rem;
  }
  div[data-type='image-container'] {
    justify-content: flex-end;
    ${media.app} {
      justify-content: unset;
    }
  }
`;

const dark = css``;

export default { dark, light };
