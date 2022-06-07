import { css } from 'styled-components';
import { NAME } from '../constants';

const style = css`
  position: relative;

  ${`.${NAME}__textspan`} {
    margin: 0;
  }

  &${`.${NAME}--selected`} {
    box-shadow: inset 0 -${({theme}) => theme.variables.sizes.fourthOfPadding} 0 0 var(--bob-core-components-color-grain);
  }
`;

const dark = css``;

const light = css`
  ${style};
  background-color: transparent;
  outline: none;
`;

export default { dark, light };
