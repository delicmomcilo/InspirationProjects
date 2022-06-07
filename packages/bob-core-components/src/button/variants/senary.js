import { css } from 'styled-components';
import { variables } from '../../typography/config';
import { getBtnSizeByText } from '../helpers';

const style = css`
  border: ${({ theme }) =>
  theme.variables.sizes.twoPx} solid var(--bob-core-components-color-violet);
  background-color: white;
  height: ${({ size }) => getBtnSizeByText(size)};
  width: ${({ theme }) =>
  theme.variables.sizes.button.senary.width};
  margin: ${({ theme }) =>
  theme.variables.sizes.padding};
`;

const dark = css``;

const light = css`
  ${style};
  ${variables['bob-core-components-typography__bold--medium--violet']};
`;

export default { dark, light };
