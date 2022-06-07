import styled from "styled-components";

export const Container = styled.div`
  height: ${({ theme }) => theme.variables.sizes.slider.height};
  display: flex;
  align-items: center;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.variables.sizes.halfPadding};
  background-color: ${({ theme }) => theme.variables.colors["light-grey-2"]};
  //background-color: var(--bob-core-components-color-light-grey-2);
  border-radius: ${({ theme }) => theme.variables.sizes.halfPadding};
  cursor: pointer;
`;

export const Line = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.variables.sizes.halfPadding};
  cursor: pointer;
  height: ${({ theme }) => theme.variables.sizes.halfPadding};
  max-width: 100%;

  background-color: ${({ theme }) => theme.variables.colors["violet"]};
  //background-color: var(--bob-core-components-color-violet);
`;
