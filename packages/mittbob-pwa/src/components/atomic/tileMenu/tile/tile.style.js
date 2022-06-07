import styled from 'styled-components';
import Button from '../../Button';
import { variables } from '../../Typography';
import Icon from '../../Icon';

export const StyledIcon = styled(Icon).attrs(() => ({ variant: 'secondary' }))`
  height: 3.125rem;
  width: 3.125rem;
`;

export const StyledTileButton = styled(Button).attrs(() => ({
  variant: 'tertiary',
}))`
  margin: 0.1rem;
  background-color: var(--bob-core-components-color-violet-darker);
  border-radius: 0.313rem;
  grid-column-end: ${({ spanCol2 }) => spanCol2 && 'span 2'};
  grid-row-end: ${({ spanRow2 }) => spanRow2 && 'span 2'};
  display: flex;
  justify-content: center;
  outline: none;
  position: initial;
  fill: white;
  box-shadow: 0rem 0rem 0.188rem 0.063rem
    var(--bob-core-components-color-eggplant40);
  ${variables['bob-core-components-typography__bold--medium-1--snow']};
  ${`.${Button.NAME}__contentspan`} {
    margin: 1rem;
  }
  &:hover {
    background-color: var(--bob-core-components-color-snow);
    transition: background-color 0.4s ease;
    svg {
      fill: var(--bob-core-components-color-violet-darker);
    }
    ${`.${Button.NAME}__contentspan`} {
      ${variables['bob-core-components-typography__bold--medium-1--coal']};
    }
  }
`;

export default StyledTileButton;
