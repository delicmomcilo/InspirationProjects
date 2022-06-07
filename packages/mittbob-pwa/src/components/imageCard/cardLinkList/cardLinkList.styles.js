import styled from 'styled-components';
import Button from '../../atomic/Button';
import { media } from '../../../app/app.styles';

export const Component = styled.div.attrs(() => ({
  'data-type': 'links',
}))`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 1.5rem 2rem;
  top: 4rem;
  min-width: 18rem;
  a {
    text-decoration: none;
    color: black;
  }
  ${media.app} {
    top: 100%;
    width: 80%;
  }
`;

export const Title = styled.h2.attrs(() => ({
  className: 'bob-core-components-typography__bold--x-large--violet',
}))`
  width: 100%;
  padding-bottom: 1rem;
  height: 2.5rem;
`;

export const NavWrapper = styled.h2.attrs(() => ({
  className: 'bob-core-components-typography__bold--x-large--violet',
}))`
  display: flex;
`;

export const NavButton = styled(Button).attrs(() => ({
  variant: 'tertiary',
  role: 'link',
}))`
  padding: 0.75rem 0;
  & .bob-core-components__button__textcontainerspan {
    margin-left: 0rem;
  }
`;
