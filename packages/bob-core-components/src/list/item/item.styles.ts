import styled from "styled-components";
import { reset } from "../list.styles";
import {
  IListItem,
  IListAnchorItem,
  IIconContainer,
  IStyledContent,
} from "./item.types";
import Icon from "../../Icon";

export const IconContainer = styled.div<IIconContainer>`
  padding-right: ${({ dense, theme }) =>
    dense ? "0" : theme.variables.sizes.padding};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: auto;
    max-width: ${({ theme }) => theme.variables.sizes.doublePadding};
  }
`;

export const StyledLi = styled.li<IListItem>`
  ${reset}
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.variables.colors.mist20};
  }
`;

export const StyledA = styled.a<IListAnchorItem>`
  cursor: pointer;

  ${reset}
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.variables.colors.mist20};
  }
`;
export const Content = styled.div<IStyledContent>`
  /* in case if it becomes an anchor*/
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
  }
  /*end*/
  padding: ${({ dense, theme }) =>
    dense
      ? `${theme.variables.sizes.halfPadding} ${theme.variables.sizes.padding}`
      : theme.variables.sizes.padding};
  ${({ selected, theme }) =>
    selected &&
    ` background-color: ${theme.variables.colors["eggplant10"]};
      box-shadow: inset ${theme.variables.sizes.list.item.shadowOffsetX} 0rem 0rem ${theme.variables.sizes.list.item.shadowBlur} ${theme.variables.colors["violet-darker"]};
    `}
`;

export const WarningIcon = styled(Icon).attrs(() => ({
  name: "Warning",
  color: "warning",
}))``;
