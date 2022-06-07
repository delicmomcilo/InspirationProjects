import styled from 'styled-components';

export const StyledKicker = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__bold--medium-1--violet',
}))`
  backface-visibility: hidden;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: var(--bob-core-components-color-blue-sky);
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  bottom: -1rem;
  left: -0.75rem;
  text-align: center;
  z-index: 10; // Should be above buttons if buttons are too wide.
`;

export default StyledKicker;
