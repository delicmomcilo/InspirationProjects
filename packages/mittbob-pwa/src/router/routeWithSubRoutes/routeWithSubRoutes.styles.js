import styled from 'styled-components';

export const Authenticating = styled.div`
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.span.attrs(() => ({
  className: 'bob-core-components-typography__semibold--large--snow',
}))``;

export default Authenticating;
