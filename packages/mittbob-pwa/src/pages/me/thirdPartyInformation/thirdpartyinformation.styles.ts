import styled, { css } from 'styled-components';
import { Grid, ListItemAnchor } from '@bob/core-components';
import { media } from '../../../app/app.styles';
import { IListItemAnchorStyled } from './thirdpartyinformation.types';

export const Container = styled(Grid)`
  padding: ${({ theme }) => theme.variables.sizes.doublePadding};
  height: 100%;
  ul: {
    background-color: var(--bob-core-components-color-snow);
  }
  ${media.app} {
    width: 100%;
    height: unset;
    padding: unset;
    margin: unset;
    overflow: unset;
    ul {
      background-color: unset;
    }
  }
`;

export const XSHiddenGrid = styled(Grid)`
  display: none;
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      display: unset;
    }
  `}
`;

export const ListItemAnchorStyled = styled(ListItemAnchor)<IListItemAnchorStyled>`
  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
    & > div:first-of-type {  
      opacity: 0.5;
    }
  `}
  ${({ theme, read }) =>
    read &&
    `
    & > div:first-of-type {
       box-shadow: inset ${theme.variables.sizes.list.item.shadowOffsetX} 0rem 0rem ${theme.variables.sizes.list.item.shadowBlur} var(--bob-core-components-color-violet-darker);
    }
  `}
  &:nth-of-type(even) > div:first-of-type {
    background-color: ${({ theme }) => theme.variables.colors.snow};
  }
`;
