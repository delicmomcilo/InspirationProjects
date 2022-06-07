import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import colors from './colors';
import typography, { componentsReset } from '../Typography';
import fontFace from './font';

export const GlobalStyle = createGlobalStyle`
  
  ${fontFace};
  ${styledNormalize};
  ${typography};
  ${componentsReset}
  
  *,
*::before,
*::after{box-sizing:border-box;}

  :root {
    ${colors};
    font-family: 'SofiaPro', sans-serif;
  }
  button {
    padding: 0;
  }
`;

export default GlobalStyle;
