import styled from 'styled-components';
import { media } from '../../../app/app.styles';
import CardLinkList from '../CardLinkList';

export const Component = styled.div`
  display: flex;
  padding: 2rem 2rem 1.5rem 2rem;
  width: 60rem;
  ${media.app} {
    width: unset;
    flex-wrap: wrap;
  }
`;

export const TextAndDesc = styled.div`
  display: flex;
  justify-content: flex-start;
  color: var(--bob-core-components-color-snow);
  flex-direction: column;
  width: 50%;
  ${media.app} {
    width: unset;
  }
`;

export const TextWrapper = styled.div`
  line-height: 1.5;
`;

export const StyledHeader = styled.h1``;

export const LinkListPart = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  ${media.app} {
    width: unset;
  }
`;

export const StyledLinkList = styled(CardLinkList)`
  position: relative;
  top: 2rem;
  ${media.app} {
    position: unset;
    justify-content: center;
    transform: translateY(-35%);
  }
`;
