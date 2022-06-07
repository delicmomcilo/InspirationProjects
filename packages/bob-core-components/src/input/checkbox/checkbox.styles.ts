import styled, { css } from 'styled-components';
import { IProps } from './types';

const getVariantColor = (defaultColor: string, error: string) => ({theme, variant}: Partial<IProps>) => theme?.variables.colors[variant === 'error' ? error : defaultColor];


const activeColor = getVariantColor('violet80', 'rosso20');
const borderColor = getVariantColor('violet80', 'rosso');
const borderHoverColor = getVariantColor('violet40', 'rosso40');



const checkmark = css`
  height: 0.5rem;
  width: 0.75rem;
  border-left: 0.125rem solid;
  border-bottom: 0.125rem solid;
  transform: rotate(-45deg);
  left: 0.285rem;
  top: 0.4375rem;
`;

export const StyledCheckbox = styled.label<IProps>`
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
    border: solid 0.125rem ${borderColor};
    left: 0;
    top: 0.1875rem;
    border-radius: 0.2rem;
  }

  &:after {
    ${checkmark};
    color: ${({theme}) => theme.variables.colors.snow};
  }
`;

export const HiddenCheckbox = styled.input.attrs<IProps>(() => ({ type: 'checkbox' }))<IProps>`
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
        border-color: ${borderHoverColor};
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
        color: ${activeColor};
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
        background-color: ${activeColor};
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

export const Container = styled.div<IProps>`
  display: flex;
  position: relative;
  align-items: center;

  ${({ disabled }) => disabled && 'opacity: 0.5'};
`;
