import styled from 'styled-components';

export const StyledFieldset = styled.div.attrs(() => ({
  role: 'group',
}))`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

export const Legend = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__light--medium--sonic',
}))`
  line-height: 1.25rem;
  padding-bottom: 0.125rem;
`;

export const Controls = styled.div`
  display: flex;
  > * {
    padding-right: 1rem;
  }
`;

export const ErrorMessage = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__regular--small--rosso',
}))`
  margin-top: 0.5rem;
`;

export default StyledFieldset;
