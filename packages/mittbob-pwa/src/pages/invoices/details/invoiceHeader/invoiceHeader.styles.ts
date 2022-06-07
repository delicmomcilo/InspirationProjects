import styled from 'styled-components';

export const Component = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__semibold--large-1--coal',
}))`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Amount = styled.span.attrs(() => ({
  className: 'bob-core-components-typography__bold--x-large--violet',
}))`
  width: 30%;
  text-align: right;
  margin-right: 1rem;
`;

export const InvoiceLine = styled.span.attrs(() => ({
  className: 'bob-core-components-typography__bold--x-large--violet',
}))`
  display: flex;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.7rem;
  & > span {
    padding-left: 0.5rem;
  }
`;

export const InvoiceLineText = styled.span`
  width: 70%;
`;

export const Header = styled.span.attrs(() => ({
  className: 'bob-core-components-typography__bold--medium-1--coal',
}))`
  padding-left: 1.2rem;
`;
