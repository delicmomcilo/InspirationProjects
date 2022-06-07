import styled, { css } from 'styled-components';
import _Card from '../Card';
import { IStyledImg, IStyledItem } from './types';

export const List = styled.ul`
  margin: 0;
  padding: 1rem 0 0 0;
  list-style: none;
`;

const itemPreviewCss = css`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > * {
    &:first-child {
      margin-bottom: 0.5rem;
    }
  }
  > button {
    align-self: center;
    margin-top: -1.5rem;
  }
`;

const basicItemCss = css`
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.li<IStyledItem>`
  display: flex;
  ${({ preview }) => (preview ? itemPreviewCss : basicItemCss)};
`;

export const Label = styled.span.attrs(() => ({
  className: 'bob-core-components-typography__light--medium--violet',
}))``;

export const Card = styled(_Card)`
  padding: 0;
  min-height: unset;
`;

export const Image = styled.img<IStyledImg>`
  max-width: ${({ maxWidth = '20rem' }) => maxWidth};
`;
