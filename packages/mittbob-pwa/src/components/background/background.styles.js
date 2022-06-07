import styled, { createGlobalStyle, css } from 'styled-components';
import { ReactComponent as BgSvg } from './illustration.svg';
import { ReactComponent as ExtSvg } from './extend.svg';
import { media, AppContainer } from '../../app/app.styles';

export const TransparentAppContainer = createGlobalStyle`
  #root, body, html, ${AppContainer}  {
      background-color: transparent;
  }
`;

export const BackgroundSvg = styled(BgSvg).attrs(() => ({
  preserveAspectRatio: 'xMidYMax meet',
}))`
  width: 100%;
  position: absolute;
  bottom: 0;
  max-height: 150rem;
  max-width: 150rem;
`;
export const Fixed = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      min-height: 68rem;
    }
  `};
  z-index: -1;
  background: linear-gradient(
    var(--bob-core-components-color-white-sky),
    var(--bob-core-components-color-blue-sky) 60%
  );
  svg {
    #background {
      fill: transparent;
    }
  }
`;

export const ExtendSvg = styled(ExtSvg).attrs(() => ({
  preserveAspectRatio: 'xMidYMax meet',
}))`
  width: 100%;
  position: absolute;
  bottom: 0;
  max-height: 150rem;
  max-width: 150rem;
`;
export const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 85rem;
  min-width: 60rem;
`;

export const ExtendedContainer = styled.div`
  ${media.notMaxWidth} {
    display: none;
  }
  flex-grow: 2;
  svg {
    width: 85rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export default BackgroundSvg;
