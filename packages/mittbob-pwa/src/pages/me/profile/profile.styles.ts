import styled, { css } from 'styled-components';
import { Grid } from '@bob/core-components';

export const Form = styled.form`
  //height: 100%;
`;
export const Container = styled(Grid)`
  padding: ${({ theme }) => theme.variables.sizes.doublePadding};
  height: 100%;
`;

export const ButtonsContainer = styled(Grid)`
  //padding-top: ${({ theme }) => theme.variables.sizes.doublePadding};
  height: 100%;
`;

export const TopIconGrid = styled(Grid)`
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      display: none;
    }
  `}
`;

export const XSHiddenGrid = styled(Grid)`
  display: none;
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      display: unset;
    }
  `}
`;

export const HeaderGrid = styled(Grid)`
  padding: ${({ theme }) => theme.variables.sizes.doublePadding};
  height: 100%;
`;
