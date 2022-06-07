import { css } from 'styled-components';

import SofiaProBlack from './SofiaPro-Black.otf';
import SofiaProBlackIt from './SofiaPro-BlackIt.otf';
import SofiaProBold from './SofiaPro-Bold.otf';
import SofiaProBoldIt from './SofiaPro-BoldIt.otf';
import SofiaProExtraLight from './SofiaPro-ExtraLight.otf';
import SofiaProExtraLightIt from './SofiaPro-ExtraLightIt.otf';
import SofiaProLight from './SofiaPro-Light.otf';
import SofiaProLightIt from './SofiaPro-LightIt.otf';
import SofiaProMedium from './SofiaPro-Medium.otf';
import SofiaProMediumIt from './SofiaPro-MediumIt.otf';
import SofiaProRegular from './SofiaPro-Regular.otf';
import SofiaProRegularIt from './SofiaPro-RegularIt.otf';
import SofiaProSemiBold from './SofiaPro-SemiBold.otf';
import SofiaProSemiBoldIt from './SofiaPro-SemiBoldIt.otf';
import SofiaProUltraLight from './SofiaPro-UltraLight.otf';
import SofiaProUltraLightIt from './SofiaPro-UltraLightIt.otf';

export default css`
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProRegular}) format('opentype');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProRegularIt}) format('opentype');
    font-style: italic;
    font-weight: 400;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProBlack}) format('opentype');
    font-weight: 900;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProBlackIt}) format('opentype');
    font-weight: 900;
    font-style: italic;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProBold}) format('opentype');
    font-weight: 700;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProBoldIt}) format('opentype');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProExtraLight}) format('opentype');
    font-weight: 200;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProExtraLightIt}) format('opentype');
    font-weight: 200;
    font-style: italic;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProLight}) format('opentype');
    font-weight: 300;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProLightIt}) format('opentype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProMedium}) format('opentype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProMediumIt}) format('opentype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProSemiBold}) format('opentype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProSemiBoldIt}) format('opentype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProUltraLight}) format('opentype');
    font-weight: 100;
  }
  @font-face {
    font-family: 'SofiaPro';
    src: url(${SofiaProUltraLightIt}) format('opentype');
    font-weight: 100;
    font-style: italic;
  }
`;
