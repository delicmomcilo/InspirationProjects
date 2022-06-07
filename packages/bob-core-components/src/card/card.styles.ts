import styled from "styled-components";
import Button from "../Button";
import { IImage } from "./types";

export const Container = styled.div`
  min-height: ${({ theme }) => theme.variables.sizes.card.minHeight};
  background-color: var(--bob-core-components-color-snow);
  box-shadow: 0 0 ${({ theme }) => theme.variables.sizes.doublePadding} 0
    var(--bob-core-components-color-lightblue-shadow-50);
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: ${({ theme }) => theme.variables.sizes.halfPadding};
`;
export const ScrollableContent = styled.div`
  padding: ${({ theme }) => theme.variables.sizes.doublePadding};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Actions = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.variables.sizes.doublePadding};
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: ${({ theme }) => theme.variables.sizes.padding};
  }
`;

export const Header = styled.h2.attrs(() => ({}))`
  font-size: ${({ theme }) => theme.variables.sizes.fontSizes["x-large"]};
  color: ${({ theme }) => theme.variables.colors.violet};
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.variables.sizes.padding};
`;

export const Image = styled.img<IImage>`
  object-fit: ${({ objectFit = "contain" }) => objectFit};
  align-self: center;
  padding-bottom: ${({ theme }) => theme.variables.sizes.padding};
  padding-top: ${({ theme }) => theme.variables.sizes.padding};
  max-height: ${({ theme }) => theme.variables.sizes.card.imageMaxHeight};
  width: ${({ fullWidth, theme }) =>
    fullWidth
      ? `calc(100% + ${theme.variables.sizes.doublePadding} + ${theme.variables.sizes.doublePadding})`
      : "100%"};
`;

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.variables.colors["violet-darker"]};
  padding: ${({ theme }) => theme.variables.sizes.padding}
    ${({ theme }) => theme.variables.sizes.doublePadding};
  margin: ${({ theme }) =>
    `${theme.variables.sizes.padding} 0 ${theme.variables.sizes.padding} -${theme.variables.sizes.doublePadding}`};
  width: ${({ theme }) =>
    `calc(100% + ${theme.variables.sizes.doublePadding} + ${theme.variables.sizes.doublePadding})`};
`;

export const CloseButton = styled(Button).attrs(() => ({
  variant: "icon",
  iconName: "Close"
}))`
  padding: ${({ theme }) => theme.variables.sizes.padding};
  position: absolute;
  top: 0;
  right: 0;
`;
