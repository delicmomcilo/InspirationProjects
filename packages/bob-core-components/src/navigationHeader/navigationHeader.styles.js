import styled from 'styled-components';
import { media } from '../../../app/app.styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--bob-core-components-color-violet-darker);
  flex-grow: 1;
`;

export const Header = styled.div`
  height: 3.5rem;
  //padding-top: 2rem;
  padding-left: 1rem;
  background-image: linear-gradient(
    var(--bob-core-components-color-violet),
    var(--bob-core-components-color-violet-darker)
  );
  align-items: center;
  display: none;
  ${media.app} {
    display: flex;
  }
`;

export const Content = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  height: calc(100% - 7rem);
  background-color: var(--bob-core-components-color-mint20);
  overflow: unset;

  ${media.app} {
    overflow: auto;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding-bottom: 10rem;
  }
`;
