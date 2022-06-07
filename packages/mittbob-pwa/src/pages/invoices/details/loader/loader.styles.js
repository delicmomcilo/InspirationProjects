import styled from 'styled-components';

export const LoaderContainer = styled.div`
  padding: 2rem 2rem 2rem 1rem
  margin: -1rem 1rem 1rem 1rem;
  background-color: var(--bob-core-components-color-snow);
`;

export const LoaderWrapper = styled.div`
  margin-top: -1rem;
  margin-right: -1rem;
  margin-left: -1rem;
`;

export const LoaderItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1rem;
  > span {
    display: inline-flex;
  }
`;

export const LoaderStatus = styled.div`
  padding: 2rem 0.5rem 2rem 2rem;
  width: 100%;
  height: 6rem;
  background-color: var(--bob-core-components-color-snow);
  display: flex;
  align-items: center;
  > span {
    display: inline-flex;
  }
`;

export const LoaderHeader = styled.div`
  background-color: var(--bob-core-components-color-snow);
  width: 100%;
  padding: 2rem;
  margin-top: -0.5rem;
  display: flex;
  flex-direction: column;
`;
