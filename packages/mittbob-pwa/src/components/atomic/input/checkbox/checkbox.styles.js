import styled, { css } from 'styled-components';
import theme from 'styled-theming';

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

const checkmark = css`
  height: 0.5rem;
  width: 0.75rem;
  border-left: 0.125rem solid;
  border-bottom: 0.125rem solid;
  transform: rotate(-45deg);
  left: 0.285rem;
  top: 0.4375rem;
`;

export const StyledCheckbox = styled.label`
  position: relative;
  display: inline-block;
  padding-left: 1.8rem;
  padding-top: 0.4rem;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    content: '';
    background-color: transparent;
  }

  &:before {
    height: 1.313rem;
    width: 1.313rem;
    border: solid 0.125rem var(${borderColor});
    left: 0;
    top: 0.1875rem;
    border-radius: 0.2rem;
  }

  &:after {
    ${checkmark};
    color: var(--bob-core-components-color-snow);
  }
`;

export const HiddenCheckbox = styled.input.attrs(() => ({ type: 'checkbox' }))`
  position: absolute;
  opacity: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  ${({ disabled }) => disabled && 'cursor: default; pointer-events: none;'};

  &:hover,
  &:focus {
    & + ${StyledCheckbox} {
      &:before {
        border-color: var(${borderHoverColor});
        background-color: transparent;
      }
      &:after {
        background-color: transparent;
      }
    }
  }

  &:active {
    & + ${StyledCheckbox} {
      &:before {
      }
      &:after {
        color: var(${activeColor});
        background-color: transparent;
        display: unset;
      }
    }
  }
  & + ${StyledCheckbox} {
    &:after {
      background-color: transparent;
      display: none;
    }
  }
  &:checked {
    & + ${StyledCheckbox} {
      &:before {
        background-color: var(${activeColor});
      }
      &:after {
        background-color: transparent;
        display: unset;
      }
    }
  }

  & + label::after {
    content: none;
  }

  &:checked + label::after {
    content: '';
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  ${({ disabled }) => disabled && 'opacity: 0.5'};
`;
