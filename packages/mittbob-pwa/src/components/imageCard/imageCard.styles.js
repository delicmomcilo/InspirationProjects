import styled from 'styled-components';
import theme from 'styled-theming';
import CardLinkList from './CardLinkList';
import * as variants from './variants';
import Image from '../atomic/Image';
import { media } from '../../app/app.styles';

const variantStyling = theme.variants('mode', 'variant', {
  default: variants.rightOverlap,
  ...variants,
});

export const Component = styled.div`
  position: relative;
  display: flex;
  ${media.app} {
    flex-direction: column;
  }
  align-items: center;
  ${variantStyling}
`;

export const StyledLinkList = styled(CardLinkList)`
  position: absolute;
  background-color: var(--bob-core-components-color-snow);
  ${media.app} {
    position: unset;
    justify-content: center;
    transform: translateY(-35%);
  }
`;

export const ImageContainer = styled.div.attrs(() => ({
  'data-type': 'image-container',
}))`
  display: flex;
  height: 29rem;
  width: 60rem;
  ${media.app} {
    height: unset;
    width: unset;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 0.5rem;
  height: 29rem;
  width: 51rem;
  object-fit: cover;

  ${media.app} {
    width: 100%;
    height: 100%;
    object-fit: unset;
  }
`;
