import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const base = css`
  background-color: transparent;
  padding: 0;
  border: none;
`;

const activeColor = theme.variants('mode', 'variant', {
  default: {
    light: '--bob-core-components-color-violet80',
    dark: '--bob-core-components-color-violet80',
  },
  error: {
    light: '--bob-core-components-color-rosso20',
    dark: '--bob-core-components-color-rosso20',
  },
});
const borderColor = theme.variants('mode', 'variant', {
  default: {
    light: '--bob-core-components-color-violet80',
    dark: '--bob-core-components-color-violet80',
  },
  error: {
    light: '--bob-core-components-color-rosso',
    dark: '--bob-core-components-color-rosso',
  },
});
const borderHoverColor = theme.variants('mode', 'variant', {
  default: {
    light: '--bob-core-components-color-violet40',
    dark: '--bob-core-components-color-violet40',
  },
  error: {
    light: '--bob-core-components-color-rosso40',
    dark: '--bob-core-components-color-rosso40',
  },
});

export const Label = styled.label`
  padding-left: 0.5rem;
  ${({ disabled }) => disabled && 'cursor: default; pointer-events: none;'};
`;
export const StyledRadio = styled.div`
  ${base};
  width: 1.5rem;
  height: 1.5rem;
  border: solid 0.125rem var(${borderColor});
  border-radius: 50%;
  position: relative;
  padding: 0.25rem;

  &:after {
    content: '';
    width: calc(100% - 0.5rem);
    height: calc(100% - 0.5rem);
    position: absolute;
    background-color: var(${borderColor});
    border-radius: 50%;
  }

  ${({ disabled }) => disabled && 'cursor: default; pointer-events: none;'};
`;

export const HiddenRadio = styled.input.attrs(() => ({ type: 'radio' }))`
  position: absolute;
  opacity: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  z-index: 1;
  ${({ disabled }) => disabled && 'cursor: default; pointer-events: none;'};

  &:hover,
  &:focus {
    & + ${StyledRadio} {
      border-color: var(${borderHoverColor});
      &:after {
        background-color: var(${borderHoverColor});
      }
    }
  }
  &:active {
    & + ${StyledRadio} {
      border: none;
      &:after {
        display: unset;
        background-color: var(${activeColor});
      }
    }
  }
  & + ${StyledRadio} {
    &:after {
      display: none;
    }
  }
  &:checked {
    & + ${StyledRadio} {
      &:after {
        display: unset;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  ${({ disabled }) => disabled && 'opacity: 0.5'};
`;

export default StyledRadio;
