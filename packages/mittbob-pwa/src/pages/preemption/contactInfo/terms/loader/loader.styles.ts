import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  max-width: 10rem;
  padding-bottom: ${({theme}) => theme.variables.sizes.padding};
`;

export const Rows = styled.div`
  line-height: 1.5rem;
  padding-bottom: ${({theme}) => theme.variables.sizes.padding};
`;