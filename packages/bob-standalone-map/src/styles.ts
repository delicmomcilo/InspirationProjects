import styled from "styled-components";
import { Slider as S, DefaultCss } from "@bob/core-components";
import { IContainer } from "./types";
import { ModalDialog, Card as C } from "@bob/core-components";

export const Dialog = styled(ModalDialog)`
  ${DefaultCss};

  > div {
    width: 20rem;
    > * {
      &:nth-child(2),
      &:nth-child(3) {
        font-size: ${({ theme }) => theme.variables.sizes.fontSizes["medium"]};
        * {
          font-size: ${({ theme }) =>
            theme.variables.sizes.fontSizes["medium"]};
        }
      }
    }
  }
`;

export const Slider = styled(S)`
`;

export const Card = styled(C)`
    width: 20rem;
  > * {
    &:nth-child(2),
    &:nth-child(3) {
      font-size: ${({ theme }) => theme.variables.sizes.fontSizes["medium"]};
      * {
        font-size: ${({ theme }) => theme.variables.sizes.fontSizes["medium"]};
      }
    }
  }
`;
export const Container = styled.div<IContainer>`
  ${DefaultCss};
  background-color: #eee;
  position: relative;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 ${({ theme }) => theme.variables.sizes.doublePadding} 0
    ${({ theme }) => theme.variables.colors["lightblue-shadow-50"]};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`};
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ width }) => width && `width: ${width}`};

  .gm-style-iw-t {
    &::after {
      top: -${({ theme }) => theme.variables.sizes.onePx};
      box-shadow: 0 0 ${({ theme }) => theme.variables.sizes.doublePadding} 0
        ${({ theme }) => theme.variables.colors["lightblue-shadow-50"]};
    }
  }
  .gm-style {
    font: inherit;
  }
  .gm-style-iw {
    max-height: unset !important;
    background-color: transparent;
    box-shadow: none;
    overflow: visible; //show shadow on card
    .gm-style-iw-d {
      max-height: unset !important;
      overflow: visible !important; //show shadow on card
    }

    > button {
      visibility: hidden;
      pointer-events: none;
    }
  }
`;

export const P = styled.p<{ gutterBottom: boolean }>`
  && {
    ${({ gutterBottom, theme }) =>
      gutterBottom && `padding-bottom: ${theme.variables.sizes.halfPadding}`};
  }
`;

export const StatusWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  > * {
    &:first-child {
      @media (min-width: 600px) {
        margin: ${({ theme }) => theme.variables.sizes.doublePadding} 0 0
          ${({ theme }) => theme.variables.sizes.doublePadding};
      }
      max-width: ${({ theme }) =>
        theme.variables.sizes.mapSizes.controlsMaxWidth};
      input {
        box-shadow: 0 0 ${({ theme }) => theme.variables.sizes.doublePadding} 0
          ${({ theme }) => theme.variables.colors["lightblue-shadow-50"]};
      }
    }
  }
`;

export const FootNote = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${({ theme }) => theme.variables.sizes.padding};
  margin-left: auto;
  > span {
    &:first-child {
      padding-bottom: ${({ theme }) => theme.variables.sizes.halfPadding};
    }
  }
`;

export const RangeControl = styled.div`
  display: flex;
  align-items: center;
  > div {
    &:first-child {
      width: ${({ theme }) => theme.variables.sizes.mapSizes.sliderLabelWidth};
    }
    &:last-child {
      padding-left: ${({ theme }) => theme.variables.sizes.padding};
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    > span {
      &:first-child {
        align-self: flex-start;
      }
      &:last-child {
        align-self: flex-end;
      }
    }
  }
`;

export const Footer = styled.div`
  &:before {
    position: absolute;
    content: "";
    box-shadow: 0 -${({ theme }) => theme.variables.sizes.twoPx} ${({
  theme
}) => theme.variables.sizes.twoPx} 0 ${({ theme }) =>
  theme.variables.colors["lightblue-shadow-50"]};
    width: 100%;
    height: ${({ theme }) => theme.variables.sizes.onePx};
    top: 0;
    left: 0;
  }
  padding: ${({ theme }) => theme.variables.sizes.padding};
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.variables.colors.snow};
`;
