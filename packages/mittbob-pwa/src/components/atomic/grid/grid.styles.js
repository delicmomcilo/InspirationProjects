import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  display: grid;
  row-gap: 1rem;
  column-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 25rem));
  justify-content: center;
`;

export const Item = styled.div`
  ${({ span = [0, 0] }) => css`
    grid-row-end: span ${span[0]};
  `};
`;
