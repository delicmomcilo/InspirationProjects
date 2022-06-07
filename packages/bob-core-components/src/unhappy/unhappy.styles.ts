import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  margin: 2rem auto;
  padding: 0 1rem;

  svg {
    width: 5rem;
    height: 5rem;
  }
`;

export const Title = styled.h2.attrs(() => ({
  className: 'bob-core-components-typography__bold--large--violet',
}))`
  margin-bottom: 1rem;
`;
export const Text = styled.p.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium--coal',
}))``;
