import styled from 'styled-components';
import theme from 'styled-theming';
import { blank, regular, warning } from './variants';

const variantStyling = theme.variants('mode', 'variant', {
  default: regular,
  warning,
  regular,
  blank,
});

export default styled.button.attrs(props => ({
  variant: props.variant || 'regular',
}))`
  transition: background-color 250ms cubic-bezier(0.78, 0.02, 0.58, 1),
    box-shadow 250ms cubic-bezier(0.78, 0.02, 0.58, 1);
  cursor: pointer;
  outline: none;
  padding: 0;
  border: none;
  width: 100%;
  height: ${({ maxY, value }) => {
    const val = (value / maxY) * 100;
    if (val > 0 && val < 1) return 1;
    return val.toFixed();
  }}%;
  max-width: 1.25rem;
  ${variantStyling};
  &:active {
    transform: translateY(0.0625rem);
  }
`;
