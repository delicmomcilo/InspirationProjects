import styled from 'styled-components';
import theme from 'styled-theming';
import primary from './variants/primary';

const variantStyling = theme.variants('mode', 'variant', {
  default: primary,
  primary,
});

export const StyledAnchor = styled.a`
  text-decoration: underline;
  cursor: pointer;
  ${variantStyling};
`;

export default StyledAnchor;
