import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`};
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  img {
    transition: opacity cubic-bezier(0.78, 0.02, 0.58, 1) 250ms;
    max-width: 100%;
    width: auto;
    height: auto;
  }
  ${({ loaded }) =>
    loaded
      ? css`
          img {
            opacity: 1;
          }
        `
      : css`
          img {
            opacity: 0;
          }
        `}
`;

export default Container;
