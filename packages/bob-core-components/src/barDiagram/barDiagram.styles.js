import styled from 'styled-components';

export { default as Bar } from './bar/bar.styles';

export const sizes = {
  small: '10',
  medium: '20',
  large: '30',
};

export const Container = styled.div`
  position: relative;
  padding-top: 3rem; //popover height
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ size = sizes.small }) =>
    (size && sizes[size]) || sizes.small}rem;
  > div {
    transition: all 250ms cubic-bezier(0.78, 0.02, 0.58, 1);
  }
`;

export const Bars = styled.div`
  display: flex;
  align-items: baseline;
  height: 100%;
  width: calc(100% - 1rem);
  justify-content: space-between;
  flex-grow: 1;
`;

export const Label = styled.label.attrs(() => ({
  className: 'bob-core-components-typography__regular--x-small--coal',
}))`
  max-width: 1rem;
  min-height: 0.5rem;
  overflow: visible;
`;
export const Labels = styled(Bars)``;

export const Line = styled.div`
  width: 100%;
  height: 0.125rem;
  min-height: 0.125rem;
  max-height: 0.125rem;
  background-color: var(
    --bob-core-components-color-bar-diagram-line-background
  );
  box-shadow: 0 0.1875rem 0.375rem var(--bob-core-components-color-ash);
`;
