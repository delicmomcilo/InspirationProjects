import { css } from 'styled-components';
import { variables } from '../../Typography';
import { getBtnSizeByText } from '../helpers';

const style = css`
  border: 0.125rem solid var(--bob-core-components-color-violet);
  background-color: white;
  height: ${({ size }) => getBtnSizeByText(size)};
  width: 16rem;
  margin: 1rem;
`;

const dark = css``;

const light = css`
  ${style};
  ${variables['bob-core-components-typography__bold--medium--violet']};
`;

export default { dark, light };
