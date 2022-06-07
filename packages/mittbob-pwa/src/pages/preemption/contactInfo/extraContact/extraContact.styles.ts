import styled from 'styled-components';
import {Input as IP} from '@bob/core-components';

export const Buttons = styled.div<{ edit: boolean}>`
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > * {
    padding-bottom: ${({ theme }) => theme.variables.sizes.padding};

    &:first-child {
      min-width: 13rem;
      margin-right: ${({ theme }) => theme.variables.sizes.padding};
    }
    &:last-child {
      visibility: ${({ edit }) => (edit ? 'visible' : 'hidden')};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;



export const Input = styled(IP)`
  padding-bottom: ${({ theme }) => theme.variables.sizes.padding};
`
