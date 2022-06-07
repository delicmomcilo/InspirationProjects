import { css } from 'styled-components';
import { NAME } from '../constants';
import { getBtnSizeByText } from '../helpers';

const style = css`
  position: relative;
  height: ${({ size }) => getBtnSizeByText(size)};
  ${`.${NAME}__textspan`} {
    margin: 0;
  }
`;

const dark = css``;

const light = css`
  ${style};
  background-color: transparent;
  outline: none;
`;

export default { dark, light };
