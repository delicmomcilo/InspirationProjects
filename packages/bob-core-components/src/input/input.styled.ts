import styled, { css } from "styled-components";
import { IProps } from "./input.types";
import Typography from "../Typography";

const movedLabelCss = css`
  top: -${({ theme }) => theme.variables.sizes.halfPadding};
  font-size: ${({ theme }) => theme.variables.sizes.fontSizes.medium};
  color: ${({ theme }) => theme.variables.colors.eggplant};
  left: ${({ theme }) => theme.variables.sizes.halfPadding};
`;

export const Container = styled.div``;

export const InputContainer = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.variables.sizes.sixPx};
`;

export const Adornment = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: ${({ theme }) => theme.variables.sizes.adornmentWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputLabel = styled(Typography)`
  position: absolute;
  pointer-events: none;
  left: ${({ theme }) => theme.variables.sizes.doublePadding};
  top: ${({ theme }) => theme.variables.sizes.padding};
  transition: 250ms cubic-bezier(0.78, 0.02, 0.58, 1);
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.variables.colors.snow} 50%,
    transparent 50%
  );
  ${({ stickLabel }) => stickLabel && movedLabelCss};
`;

export const StyledInput = styled.input.attrs<IProps>(() => ({
  spellCheck: false
}))<IProps>`
  width: 100%;
  &&& {
    line-height: ${({ theme }) => theme.variables.sizes.inputHeight};
    height: ${({ theme }) => theme.variables.sizes.inputHeight};
    font-size: ${({ theme }) => theme.variables.sizes.fontSizes.medium};
    color: ${({ theme }) => theme.variables.colors.coal};
  }
  border: ${({ theme }) => theme.variables.sizes.onePx} solid
      ${({ error, theme }) =>
        error
          ? theme.variables.colors.rosso
          : theme.variables.colors["violet60"]};
  border-radius: ${({ theme }) => theme.variables.sizes.sixPx};
  text-indent: calc(
    ${({ theme }) => theme.variables.sizes.padding} -
      ${({ theme }) => theme.variables.sizes.twoPx}
  );
  outline: 0;
  box-shadow: 0 ${({ theme }) => theme.variables.sizes.fourthOfPadding}
    ${({ theme }) => theme.variables.sizes.padding} rgba(50, 14, 59, 0.08);
  ${({ iconName }) => iconName && "padding-right: 2.5rem"};

  &:hover {
    box-shadow: 0 ${({ theme }) => theme.variables.sizes.fourthOfPadding}
      ${({ theme }) => theme.variables.sizes.padding} rgba(0, 0, 0, 0.08);
  }
  &:focus {
    border: ${({ theme }) => theme.variables.sizes.onePx} solid
      ${({ error, theme }) =>
        error ? theme.variables.colors.rosso : theme.variables.colors.violet};
  &:focus,
  &:valid {
    ~ ${InputLabel} {
      ${movedLabelCss};
    }
  }
  &:disabled {
    border: none;
    box-shadow: 0 0 0 0;
    background-color: ${({ theme }) => theme.variables.colors.platinum};
    ~ ${InputLabel} {
      ${movedLabelCss};
      background: ${({ theme }) => theme.variables.colors.platinum};
      background-color: ${({ theme }) => theme.variables.colors.platinum};
    }
  }

  ${({ placeholder }) =>
    placeholder &&
    `
    ~ ${InputLabel} {
      ${movedLabelCss}
     }
  `};
`;

export const InputError = styled.div.attrs(() => ({
  className: "bob-core-components-typography__regular--small--rosso"
}))`
  margin-top: ${({ theme }) => theme.variables.sizes.halfPadding};
  margin-bottom: ${({ theme }) => theme.variables.sizes.halfPadding};
  text-align: start;
  vertical-align: top;
`;

export default StyledInput;
