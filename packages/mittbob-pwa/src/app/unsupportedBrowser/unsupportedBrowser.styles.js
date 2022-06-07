import styled from 'styled-components';
import { Icon } from '../../components/atomic';

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1.attrs(() => ({
  className: 'bob-core-components-typography__semibold--xx-large--violet',
}))`
  max-width: 35rem;
`;

export const UnsupportedIcon = styled(Icon).attrs(() => ({ name: 'Warning' }))`
  max-width: 20rem;
  max-height: 20rem;
  min-width: 5rem;
  min-height: 5rem;
  width: 100%;
  height: 100%;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    svg {
      margin-right: 1rem;
      width: 2rem;
      height: 2rem;
    }
    > span {
      &:nth-child(3) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }
`;
