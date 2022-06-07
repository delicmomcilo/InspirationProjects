import styled from 'styled-components';
import { media } from '../../app/app.styles';
import CardLinkList from '../../components/imageCard/CardLinkList';
import { Card } from '../../components/atomic';

export const StyledCardLinkList = styled(CardLinkList)`
  width: 100%;
  max-width: 50rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  > *:first-child {
    grid-column-start: span 2;
  }
  ${media.app} {
    display: flex;
    width: unset;
  }
`;

export const Component = styled.div`
  background-color: var(--bob-core-components-color-mint20);
  padding: 0 1rem 0 1.5rem;
  ${media.app} {
    padding: unset;
  }
`;

export const UmbracoContent = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium-1--coal',
}))`
  p {
    margin-bottom: 0.5rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const UmbracoContentTitle = styled.span.attrs(() => ({
  className: 'bob-core-components-typography__semibold--large--coal',
}))`
  display: inline-block;
  margin-bottom: 0.5rem;
  &:not(:first-child) {
    margin-top: 0.5rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
  ${media.app} {
    padding-bottom: unset;
    margin-bottom: -2rem;
  }
`;

export const FlatCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
`;

export const CardLinksWrapper = styled.div`
  width: 59rem;
  display: flex;
  justify-content: flex-start;
`;

export default Component;
