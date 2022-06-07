import styled from 'styled-components';
import L from '../List';
export const List = styled(L)`
  > * {
   cursor: pointer;
   
   &:hover {
      background-color: ${({ theme }) => theme.variables.colors['light-grey-2']};
   }

  }
`;