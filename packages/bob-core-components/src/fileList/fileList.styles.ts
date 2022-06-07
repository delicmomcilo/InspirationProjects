import styled, { css } from 'styled-components';
import _Card from '../Card';
import { IStyledImg, IStyledItem, IButtonGrid } from './types';
import Grid from '../Grid';

export const Card = styled(_Card)`
  padding: 0;
  min-height: unset;
`;

export const Image = styled.img<IStyledImg>`
  max-width: ${({ maxWidth = '20rem' }) => maxWidth};
`;

export const ButtonGrid = styled(Grid).attrs(() => ({ item: true}))`
  ${({ hasImage, theme }: IButtonGrid) => hasImage && `margin-top: calc(-${theme.variables.sizes.padding} * 3)`};
`;
