import styled from 'styled-components';

export const ExtraContact = styled.div``;

export const InlineFlexDiv = styled.div`
  display: inline-flex;
`;

export const Info = styled.div`
  padding-left: ${({ theme }) => theme.variables.sizes.padding};
  padding-bottom: ${({ theme }) => theme.variables.sizes.padding};
`;

export const Container = styled.div`
  > * {
    margin-bottom: ${({ theme }) => theme.variables.sizes.padding};
  }
`;

export const Buttons = styled.div`
  padding-top: ${({ theme }) => theme.variables.sizes.padding};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
