import styled from 'styled-components';
import theme from 'styled-theming';
import Icon from '../Icon';

export const TextContainer = styled.svg.attrs(() => ({
  viewBox: '0 0 32 32',
}))`
  width: 100%;
  height: 100%;
  padding: 0.2rem;
`;

export const AutoSizeText = styled.span``;

const borderColor = theme('mode', {
  light: 'var(--bob-core-components-color-violet)',
  dark: 'var(--bob-core-components-color-snow)',
});

export const CheckIcon = styled(Icon).attrs(() => ({
  name: 'Check',
  color: 'success',
}))``;

export const WarningIcon = styled(Icon).attrs(() => ({
  name: 'Warning',
  color: 'warning',
}))``;

export const Container = styled.div`
  position: absolute;
  height: 2.25rem;
  width: 3rem;
  left: ${({ left = -999999 }) => left}px;
  transform: translateX(-50%);
  border: solid 0.125rem ${borderColor};
  top: 0;

  &:after {
    position: absolute;
    display: block;
    content: '';
    border: 0.5rem solid transparent; /*adjust size*/
    bottom: -1rem;
    left: 50%;
    margin-left: -0.5rem;
    border-top-color: ${borderColor}; /*Chevron Color*/
  }
`;

export const Inner = styled.div.attrs(({ theme: th }) => {
  let className = 'bob-core-components-typography__bold--small--violet';
  if (th && th.mode && th.mode === 'dark')
    className = 'bob-core-components-typography__bold--small--snow';
  return { className };
})`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.2rem;
`;

export const TextPadding = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  position: absolute;
  height: 1.5rem;
  right: -0.75rem;
  top: -0.75rem;
  width: 1.5rem;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--bob-core-components-color-snow);
  }
`;
