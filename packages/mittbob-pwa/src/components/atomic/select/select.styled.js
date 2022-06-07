import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { clearButtonDefaultCss } from '../helpers';

import { variables } from '../Typography';

const backgroundColor = theme.variants('mode', 'variant', {
  default: {
    light: '--bob-core-components-color-snow',
    dark: '--bob-core-components-color-snow',
  },
  error: {
    light: '--bob-core-components-color-snow',
    dark: '--bob-core-components-color-snow',
  },
});

const borderColor = theme.variants('mode', 'variant', {
  default: {
    light: '--bob-core-components-color-violet60',
    dark: '--bob-core-components-color-violet60',
  },
  error: {
    light: '--bob-core-components-color-rosso',
    dark: '--bob-core-components-color-rosso',
  },
});

const borderHoverColor = theme.variants('mode', 'variant', {
  default: {
    light: '--bob-core-components-color-violet60',
    dark: '--bob-core-components-color-violet60',
  },
  error: {
    light: '--bob-core-components-color-rosso60',
    dark: '--bob-core-components-color-rosso60',
  },
});

const resetCss = css`
  outline: none;
  border: none;
  background-color: transparent;
  appearance: none;
`;

export const ChevronContainer = styled.button.attrs(() => ({ disabled: true }))`
  ${clearButtonDefaultCss};
  position: absolute;
  pointer-events: none;
  height: 100%;
  width: 1.5rem;
  right: 0.5rem;
  top: 0;
  cursor: pointer;
`;

export const Container = styled.div``;

export const SelectContainer = styled.div`
  position: relative;
`;

export const Clear = styled.button`
  ${clearButtonDefaultCss};
  height: 100%;
  right: 2rem;
  position: absolute;
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
    fill: var(${borderColor});
  }
  &:hover,
  &:focus,
  &:active {
    svg {
      fill: var(${borderHoverColor});
    }
  }
`;

export const Placeholder = styled.option``;

export const SelectLabel = styled.label.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium--sonic',
}))`
  position: absolute;
  left: 2rem;
  top: 1rem;
  pointer-events: none;
  transition: 250ms cubic-bezier(0.78, 0.02, 0.58, 1);
  background: linear-gradient(
    to top,
    var(${backgroundColor}) 50%,
    transparent 50%
  );
  ${({ isPlaceholderSelected }) =>
    !isPlaceholderSelected &&
    `
    top: -0.5rem;
    left: 0.5rem;
    ${variables['bob-core-components-typography__regular--medium--eggplant']}
  `};
`;

export const SelectError = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__regular--small--rosso',
}))`
  margin-top: 0.5rem;
  height: 1.1rem;
  text-align: start;
  vertical-align: top;
`;

export const StyledSelect = styled.select.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium--coal',
}))`
  ${resetCss};
  cursor: pointer;
  min-width: 8rem;
  height: 3rem;
  padding-right: ${({ clearable }) => (clearable ? '3rem' : '2rem')};
  padding-left: 1rem;
  border: 0.0625rem solid var(${borderColor});
  border-radius: 0.5rem;
  opacity: 1;
  width: 100%;
  box-shadow: 0 0.25rem 1rem rgba(50, 14, 59, 0.08);
  &:hover {
    & ~ ${ChevronContainer} {
      svg {
        opacity: 0.5;
      }
    }
  }
`;
