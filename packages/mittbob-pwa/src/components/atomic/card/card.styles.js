import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  min-height: 5rem;
  background-color: var(--bob-core-components-color-snow);
  box-shadow: 0 0 32px 0 var(--bob-core-components-color-lightblue-shadow-50);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0.5rem;
  overflow-y: auto;
`;

export const Actions = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 1rem;
  }
`;

export const Header = styled.h2.attrs(() => ({
  className: 'bob-core-components-typography__bold--x-large--violet',
}))`
  display: inline-flex;
  align-items: center;
  padding-bottom: 1rem;
`;

export const CloseButton = styled(Button).attrs(() => ({
  variant: 'icon',
  iconName: 'Close',
}))`
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
`;
