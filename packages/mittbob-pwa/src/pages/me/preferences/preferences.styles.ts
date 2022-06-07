import styled from 'styled-components';
import { Grid } from '@bob/core-components';

// Padding-bottom is a quick-fix caused by non-fixed mobile navigation
export const Container = styled(Grid)`
  padding: ${({theme}) => theme.variables.sizes.doublePadding};
  padding-bottom: 6rem;
`;