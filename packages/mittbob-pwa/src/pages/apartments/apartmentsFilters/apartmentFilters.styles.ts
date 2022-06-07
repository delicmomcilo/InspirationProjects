import styled from 'styled-components';
import { CheckList } from 'src/components';
import { Grid } from '@bob/core-components';

export const FilterGroup = styled(CheckList)`
`;

export const FilterGrid = styled(Grid)`
  margin-top: ${({ theme }) => theme.variables.sizes.doublePadding};
`
