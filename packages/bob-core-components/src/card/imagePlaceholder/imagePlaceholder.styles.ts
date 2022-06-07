import styled, { css } from "styled-components";
import { IProps } from './imagePlaceholder.types';

export const Container = styled.div<Partial<IProps>>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.variables.sizes.padding};
  margin-top: ${({ theme }) => theme.variables.sizes.padding};
  background-color: ${({ theme }) => theme.variables.colors["lighter-grey"]};
  height: ${({ height, theme }) =>
    height || theme.variables.sizes.card.imageMaxHeight};
  
  ${({ fullWidth, theme }) =>
    fullWidth &&
    css`
      width: calc(
        100% + ${theme.variables.sizes.doublePadding} +
          ${theme.variables.sizes.doublePadding}
      );
      margin-left: -${theme.variables.sizes.doublePadding};
    `};
`;
