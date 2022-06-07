import styled, { css } from 'styled-components';
import { fontSizes } from '../Typography';

const movedLabelCss = css`
  top: -0.5rem;
  font-size: ${fontSizes.medium};
  color: var(--bob-core-components-color-eggplant);
  padding: 0 0.125rem;
  left: 0.5rem;
`;

export const Container = styled.div``;

export const InputContainer = styled.div`
  position: relative;
  border-radius: 0.375rem;
`;

export const InputLabel = styled.label.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium--sonic',
}))`
  position: absolute;
  pointer-events: none;
  left: 2rem;
  top: 1rem;
  transition: 250ms cubic-bezier(0.78, 0.02, 0.58, 1);
  background: linear-gradient(to top, var(--bob-core-components-color-snow) 50%, transparent 50%);
`;

export const StyledInput = styled.input.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium--coal',
  spellCheck: false,
}))`
  width: 100%;
  height: 3rem;
  border: 0.0625rem solid
    ${({ error }) =>
      error
        ? 'var(--bob-core-components-color-rosso);'
        : 'var(--bob-core-components-color-violet60);'};
  border-radius: 0.375rem;
  text-indent: 2rem;
  outline: 0;
  box-shadow: 0 0.25rem 1rem rgba(50, 14, 59, 0.08);

  &:hover {
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.08);
  }
  &:focus {
    border: 0.0625rem solid
      ${({ error }) =>
        error
          ? 'var(--bob-core-components-color-rosso);'
          : 'var(--bob-core-components-color-violet);'};
  }
  &:focus,
  &:valid {
    ~ ${InputLabel} {
      ${movedLabelCss};
    }
  }
  &:disabled {
    border: none;
    box-shadow: 0 0 0 0;
    background-color: var(--bob-core-components-color-platinum);
    ~ ${InputLabel} {
      ${movedLabelCss};
      background: var(--bob-core-components-color-platinum);
      background-color: var(--bob-core-components-color-platinum);
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
  className: 'bob-core-components-typography__regular--small--rosso',
}))`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: start;
  vertical-align: top;
`;

export default StyledInput;
