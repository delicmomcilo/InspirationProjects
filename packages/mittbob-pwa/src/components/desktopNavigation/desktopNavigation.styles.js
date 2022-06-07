import styled from 'styled-components';
import { media } from '../../app/app.styles';

export const Nav = styled.nav`
  padding: 3rem 2.5rem;
  display: flex;
  width: 100%;
  max-width: 85rem;
  margin: auto;
  flex-direction: row-reverse;
  > button {
    margin-left: 1rem;
  }
`;

export const NavWrapper = styled.div`
  ${media.app} {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    margin-left: 2rem;
    > svg {
      width: 100%;
      max-width: 7rem;
      max-height: 7rem;
    }
  }
`;

export default Nav;
