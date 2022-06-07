import styled from 'styled-components';
import { media } from '../../app/app.styles';

export const Component = styled.span.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium-1--coal',
}))`
  display: inline-flex;
  align-items: center;
  max-width: 85rem;
  padding-left: 1rem;
  padding-bottom: 1rem;

  ${media.app} {
    display: none;
    padding-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
  }

  & > span:not(:last-child) {
    font-style: italic;
    a {
      color: var(--bob-core-components-color-coal);
    }
  }

  & > span:last-child {
    font-style: normal;
    color: var(--bob-core-components-color-violet);
  }
`;

export const Wrapper = styled.div`
  ${media.app} {
    display: none;
  }
  width: 100%;
  max-width: 85rem;
  margin: auto;
  box-shadow: 0 0.375rem 0.25rem -0.5rem var(--bob-core-components-color-ash);
  margin-bottom: 0.0625rem;
`;

export const StyledBreadcrumb = styled.span`
  //padding-right: 0.5rem;
`;
