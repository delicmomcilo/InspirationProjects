import { createGlobalStyle, css } from "styled-components";
import styledNormalize from "styled-normalize";
import colors from "../theme/colors";
import typography, { componentsReset } from "../typography/config";
import fontFace from "../theme/font";

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
export const DefaultCss = css`

  ${fontFace};
  ${styledNormalize};
  ${typography};
  ${componentsReset}

  *,
*::before,
*::after{box-sizing:border-box;}

    ${colors};
    font-family: 'SofiaPro', sans-serif;

`;

export default GlobalStyle;
