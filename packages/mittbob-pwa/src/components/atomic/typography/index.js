import { css } from 'styled-components';

const sizes = {
  'xxx-large': '3.75rem',
  'xx-large': '2.25rem',
  'x-large': '1.875rem',
  'large-2': '1.5rem',
  large: '1.125rem',
  'medium-1': '1rem',
  medium: '0.875rem',
  small: '0.75rem',
  'x-small': '0.625rem',
};

const types = ['semibold', 'regular', 'bold', 'light'];
const colors = [
  'violet',
  'violet-darker',
  'lighter-grey',
  'light-grey',
  'coal',
  'snow',
  'rosso60',
  'rosso',
  'sonic',
  'eggplant',
  'mint',
];

export const componentsReset = css`
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    padding: 0;
  }
`;

const getFontWeight = type => {
  switch (type) {
    case 'semibold':
      return 'font-weight: 600';
    case 'bold':
      return 'font-weight: 700';
    case 'light':
      return 'font-weight: 300';
    default:
      return 'font-weight: 400';
  }
};

const createTypography = ({ type, fontSize, color }) => `
  .bob-core-components-typography__${type}--${fontSize}--${color} {  
    font-size: ${sizes[fontSize]};
    color: var(--bob-core-components-color-${color});
    fill: var(--bob-core-components-color-${color});
    ${getFontWeight(type)};
  }
`;
// prettier has a problem with formatting the code in the following function, hence the following:
// prettier-ignore
const createTypographyCss = ({ type, fontSize, color }) => css`
  font-size: ${sizes[fontSize]};
  color: var(--bob-core-components-color-${color}, var(--bob-core-components-color-${color})
  );
  ${getFontWeight(type)};
`;

const generate = () => {
  let style = ``;
  const variables = {};
  // let listAllClasses = '';
  types.forEach(type => {
    colors.forEach(color => {
      Object.keys(sizes).forEach(fontSize => {
        // listAllClasses += `\n bob-core-components-typography__${type}--${fontSize}--${color}`;
        style += createTypography({ type, color, fontSize });
        variables[
          `bob-core-components-typography__${type}--${fontSize}--${color}`
        ] = createTypographyCss({ type, color, fontSize });
      });
    });
  });
  // console.log(listAllClasses);
  return {
    css: css`
      ${style}
    `,
    variables,
    componentsReset,
  };
};

const typo = generate();
export const { variables } = typo;
export const { css: compiledCss } = typo;
export default typo.css;
export const fontSizes = sizes;
export const fontWeightTypes = types;
export const fontColors = colors;

/*
* REFERENCE

 bob-core-components-typography__semibold--xxx-large--violet
 bob-core-components-typography__semibold--xx-large--violet
 bob-core-components-typography__semibold--x-large--violet
 bob-core-components-typography__semibold--large--violet
 bob-core-components-typography__semibold--medium-1--violet
 bob-core-components-typography__semibold--medium--violet
 bob-core-components-typography__semibold--small--violet
 bob-core-components-typography__semibold--x-small--violet
 bob-core-components-typography__semibold--xxx-large--lighter-grey
 bob-core-components-typography__semibold--xx-large--lighter-grey
 bob-core-components-typography__semibold--x-large--lighter-grey
 bob-core-components-typography__semibold--large--lighter-grey
 bob-core-components-typography__semibold--medium-1--lighter-grey
 bob-core-components-typography__semibold--medium--lighter-grey
 bob-core-components-typography__semibold--small--lighter-grey
 bob-core-components-typography__semibold--x-small--lighter-grey
 bob-core-components-typography__semibold--xxx-large--light-grey
 bob-core-components-typography__semibold--xx-large--light-grey
 bob-core-components-typography__semibold--x-large--light-grey
 bob-core-components-typography__semibold--large--light-grey
 bob-core-components-typography__semibold--medium-1--light-grey
 bob-core-components-typography__semibold--medium--light-grey
 bob-core-components-typography__semibold--small--light-grey
 bob-core-components-typography__semibold--x-small--light-grey
 bob-core-components-typography__semibold--xxx-large--coal
 bob-core-components-typography__semibold--xx-large--coal
 bob-core-components-typography__semibold--x-large--coal
 bob-core-components-typography__semibold--large--coal
 bob-core-components-typography__semibold--medium-1--coal
 bob-core-components-typography__semibold--medium--coal
 bob-core-components-typography__semibold--small--coal
 bob-core-components-typography__semibold--x-small--coal
 bob-core-components-typography__semibold--xxx-large--snow
 bob-core-components-typography__semibold--xx-large--snow
 bob-core-components-typography__semibold--x-large--snow
 bob-core-components-typography__semibold--large--snow
 bob-core-components-typography__semibold--medium-1--snow
 bob-core-components-typography__semibold--medium--snow
 bob-core-components-typography__semibold--small--snow
 bob-core-components-typography__semibold--x-small--snow
 bob-core-components-typography__semibold--xxx-large--rosso60
 bob-core-components-typography__semibold--xx-large--rosso60
 bob-core-components-typography__semibold--x-large--rosso60
 bob-core-components-typography__semibold--large--rosso60
 bob-core-components-typography__semibold--medium-1--rosso60
 bob-core-components-typography__semibold--medium--rosso60
 bob-core-components-typography__semibold--small--rosso60
 bob-core-components-typography__semibold--x-small--rosso60
 bob-core-components-typography__semibold--xxx-large--rosso
 bob-core-components-typography__semibold--xx-large--rosso
 bob-core-components-typography__semibold--x-large--rosso
 bob-core-components-typography__semibold--large--rosso
 bob-core-components-typography__semibold--medium-1--rosso
 bob-core-components-typography__semibold--medium--rosso
 bob-core-components-typography__semibold--small--rosso
 bob-core-components-typography__semibold--x-small--rosso
 bob-core-components-typography__semibold--xxx-large--sonic
 bob-core-components-typography__semibold--xx-large--sonic
 bob-core-components-typography__semibold--x-large--sonic
 bob-core-components-typography__semibold--large--sonic
 bob-core-components-typography__semibold--medium-1--sonic
 bob-core-components-typography__semibold--medium--sonic
 bob-core-components-typography__semibold--small--sonic
 bob-core-components-typography__semibold--x-small--sonic
 bob-core-components-typography__semibold--xxx-large--eggplant
 bob-core-components-typography__semibold--xx-large--eggplant
 bob-core-components-typography__semibold--x-large--eggplant
 bob-core-components-typography__semibold--large--eggplant
 bob-core-components-typography__semibold--medium-1--eggplant
 bob-core-components-typography__semibold--medium--eggplant
 bob-core-components-typography__semibold--small--eggplant
 bob-core-components-typography__semibold--x-small--eggplant
 bob-core-components-typography__regular--xxx-large--violet
 bob-core-components-typography__regular--xx-large--violet
 bob-core-components-typography__regular--x-large--violet
 bob-core-components-typography__regular--large--violet
 bob-core-components-typography__regular--medium-1--violet
 bob-core-components-typography__regular--medium--violet
 bob-core-components-typography__regular--small--violet
 bob-core-components-typography__regular--x-small--violet
 bob-core-components-typography__regular--xxx-large--lighter-grey
 bob-core-components-typography__regular--xx-large--lighter-grey
 bob-core-components-typography__regular--x-large--lighter-grey
 bob-core-components-typography__regular--large--lighter-grey
 bob-core-components-typography__regular--medium-1--lighter-grey
 bob-core-components-typography__regular--medium--lighter-grey
 bob-core-components-typography__regular--small--lighter-grey
 bob-core-components-typography__regular--x-small--lighter-grey
 bob-core-components-typography__regular--xxx-large--light-grey
 bob-core-components-typography__regular--xx-large--light-grey
 bob-core-components-typography__regular--x-large--light-grey
 bob-core-components-typography__regular--large--light-grey
 bob-core-components-typography__regular--medium-1--light-grey
 bob-core-components-typography__regular--medium--light-grey
 bob-core-components-typography__regular--small--light-grey
 bob-core-components-typography__regular--x-small--light-grey
 bob-core-components-typography__regular--xxx-large--coal
 bob-core-components-typography__regular--xx-large--coal
 bob-core-components-typography__regular--x-large--coal
 bob-core-components-typography__regular--large--coal
 bob-core-components-typography__regular--medium-1--coal
 bob-core-components-typography__regular--medium--coal
 bob-core-components-typography__regular--small--coal
 bob-core-components-typography__regular--x-small--coal
 bob-core-components-typography__regular--xxx-large--snow
 bob-core-components-typography__regular--xx-large--snow
 bob-core-components-typography__regular--x-large--snow
 bob-core-components-typography__regular--large--snow
 bob-core-components-typography__regular--medium-1--snow
 bob-core-components-typography__regular--medium--snow
 bob-core-components-typography__regular--small--snow
 bob-core-components-typography__regular--x-small--snow
 bob-core-components-typography__regular--xxx-large--rosso60
 bob-core-components-typography__regular--xx-large--rosso60
 bob-core-components-typography__regular--x-large--rosso60
 bob-core-components-typography__regular--large--rosso60
 bob-core-components-typography__regular--medium-1--rosso60
 bob-core-components-typography__regular--medium--rosso60
 bob-core-components-typography__regular--small--rosso60
 bob-core-components-typography__regular--x-small--rosso60
 bob-core-components-typography__regular--xxx-large--rosso
 bob-core-components-typography__regular--xx-large--rosso
 bob-core-components-typography__regular--x-large--rosso
 bob-core-components-typography__regular--large--rosso
 bob-core-components-typography__regular--medium-1--rosso
 bob-core-components-typography__regular--medium--rosso
 bob-core-components-typography__regular--small--rosso
 bob-core-components-typography__regular--x-small--rosso
 bob-core-components-typography__regular--xxx-large--sonic
 bob-core-components-typography__regular--xx-large--sonic
 bob-core-components-typography__regular--x-large--sonic
 bob-core-components-typography__regular--large--sonic
 bob-core-components-typography__regular--medium-1--sonic
 bob-core-components-typography__regular--medium--sonic
 bob-core-components-typography__regular--small--sonic
 bob-core-components-typography__regular--x-small--sonic
 bob-core-components-typography__regular--xxx-large--eggplant
 bob-core-components-typography__regular--xx-large--eggplant
 bob-core-components-typography__regular--x-large--eggplant
 bob-core-components-typography__regular--large--eggplant
 bob-core-components-typography__regular--medium-1--eggplant
 bob-core-components-typography__regular--medium--eggplant
 bob-core-components-typography__regular--small--eggplant
 bob-core-components-typography__regular--x-small--eggplant
 bob-core-components-typography__bold--xxx-large--violet
 bob-core-components-typography__bold--xx-large--violet
 bob-core-components-typography__bold--x-large--violet
 bob-core-components-typography__bold--large--violet
 bob-core-components-typography__bold--medium-1--violet
 bob-core-components-typography__bold--medium--violet
 bob-core-components-typography__bold--small--violet
 bob-core-components-typography__bold--x-small--violet
 bob-core-components-typography__bold--xxx-large--lighter-grey
 bob-core-components-typography__bold--xx-large--lighter-grey
 bob-core-components-typography__bold--x-large--lighter-grey
 bob-core-components-typography__bold--large--lighter-grey
 bob-core-components-typography__bold--medium-1--lighter-grey
 bob-core-components-typography__bold--medium--lighter-grey
 bob-core-components-typography__bold--small--lighter-grey
 bob-core-components-typography__bold--x-small--lighter-grey
 bob-core-components-typography__bold--xxx-large--light-grey
 bob-core-components-typography__bold--xx-large--light-grey
 bob-core-components-typography__bold--x-large--light-grey
 bob-core-components-typography__bold--large--light-grey
 bob-core-components-typography__bold--medium-1--light-grey
 bob-core-components-typography__bold--medium--light-grey
 bob-core-components-typography__bold--small--light-grey
 bob-core-components-typography__bold--x-small--light-grey
 bob-core-components-typography__bold--xxx-large--coal
 bob-core-components-typography__bold--xx-large--coal
 bob-core-components-typography__bold--x-large--coal
 bob-core-components-typography__bold--large--coal
 bob-core-components-typography__bold--medium-1--coal
 bob-core-components-typography__bold--medium--coal
 bob-core-components-typography__bold--small--coal
 bob-core-components-typography__bold--x-small--coal
 bob-core-components-typography__bold--xxx-large--snow
 bob-core-components-typography__bold--xx-large--snow
 bob-core-components-typography__bold--x-large--snow
 bob-core-components-typography__bold--large--snow
 bob-core-components-typography__bold--medium-1--snow
 bob-core-components-typography__bold--medium--snow
 bob-core-components-typography__bold--small--snow
 bob-core-components-typography__bold--x-small--snow
 bob-core-components-typography__bold--xxx-large--rosso60
 bob-core-components-typography__bold--xx-large--rosso60
 bob-core-components-typography__bold--x-large--rosso60
 bob-core-components-typography__bold--large--rosso60
 bob-core-components-typography__bold--medium-1--rosso60
 bob-core-components-typography__bold--medium--rosso60
 bob-core-components-typography__bold--small--rosso60
 bob-core-components-typography__bold--x-small--rosso60
 bob-core-components-typography__bold--xxx-large--rosso
 bob-core-components-typography__bold--xx-large--rosso
 bob-core-components-typography__bold--x-large--rosso
 bob-core-components-typography__bold--large--rosso
 bob-core-components-typography__bold--medium-1--rosso
 bob-core-components-typography__bold--medium--rosso
 bob-core-components-typography__bold--small--rosso
 bob-core-components-typography__bold--x-small--rosso
 bob-core-components-typography__bold--xxx-large--sonic
 bob-core-components-typography__bold--xx-large--sonic
 bob-core-components-typography__bold--x-large--sonic
 bob-core-components-typography__bold--large--sonic
 bob-core-components-typography__bold--medium-1--sonic
 bob-core-components-typography__bold--medium--sonic
 bob-core-components-typography__bold--small--sonic
 bob-core-components-typography__bold--x-small--sonic
 bob-core-components-typography__bold--xxx-large--eggplant
 bob-core-components-typography__bold--xx-large--eggplant
 bob-core-components-typography__bold--x-large--eggplant
 bob-core-components-typography__bold--large--eggplant
 bob-core-components-typography__bold--medium-1--eggplant
 bob-core-components-typography__bold--medium--eggplant
 bob-core-components-typography__bold--small--eggplant
 bob-core-components-typography__bold--x-small--eggplant
 bob-core-components-typography__light--xxx-large--violet
 bob-core-components-typography__light--xx-large--violet
 bob-core-components-typography__light--x-large--violet
 bob-core-components-typography__light--large--violet
 bob-core-components-typography__light--medium-1--violet
 bob-core-components-typography__light--medium--violet
 bob-core-components-typography__light--small--violet
 bob-core-components-typography__light--x-small--violet
 bob-core-components-typography__light--xxx-large--lighter-grey
 bob-core-components-typography__light--xx-large--lighter-grey
 bob-core-components-typography__light--x-large--lighter-grey
 bob-core-components-typography__light--large--lighter-grey
 bob-core-components-typography__light--medium-1--lighter-grey
 bob-core-components-typography__light--medium--lighter-grey
 bob-core-components-typography__light--small--lighter-grey
 bob-core-components-typography__light--x-small--lighter-grey
 bob-core-components-typography__light--xxx-large--light-grey
 bob-core-components-typography__light--xx-large--light-grey
 bob-core-components-typography__light--x-large--light-grey
 bob-core-components-typography__light--large--light-grey
 bob-core-components-typography__light--medium-1--light-grey
 bob-core-components-typography__light--medium--light-grey
 bob-core-components-typography__light--small--light-grey
 bob-core-components-typography__light--x-small--light-grey
 bob-core-components-typography__light--xxx-large--coal
 bob-core-components-typography__light--xx-large--coal
 bob-core-components-typography__light--x-large--coal
 bob-core-components-typography__light--large--coal
 bob-core-components-typography__light--medium-1--coal
 bob-core-components-typography__light--medium--coal
 bob-core-components-typography__light--small--coal
 bob-core-components-typography__light--x-small--coal
 bob-core-components-typography__light--xxx-large--snow
 bob-core-components-typography__light--xx-large--snow
 bob-core-components-typography__light--x-large--snow
 bob-core-components-typography__light--large--snow
 bob-core-components-typography__light--medium-1--snow
 bob-core-components-typography__light--medium--snow
 bob-core-components-typography__light--small--snow
 bob-core-components-typography__light--x-small--snow
 bob-core-components-typography__light--xxx-large--rosso60
 bob-core-components-typography__light--xx-large--rosso60
 bob-core-components-typography__light--x-large--rosso60
 bob-core-components-typography__light--large--rosso60
 bob-core-components-typography__light--medium-1--rosso60
 bob-core-components-typography__light--medium--rosso60
 bob-core-components-typography__light--small--rosso60
 bob-core-components-typography__light--x-small--rosso60
 bob-core-components-typography__light--xxx-large--rosso
 bob-core-components-typography__light--xx-large--rosso
 bob-core-components-typography__light--x-large--rosso
 bob-core-components-typography__light--large--rosso
 bob-core-components-typography__light--medium-1--rosso
 bob-core-components-typography__light--medium--rosso
 bob-core-components-typography__light--small--rosso
 bob-core-components-typography__light--x-small--rosso
 bob-core-components-typography__light--xxx-large--sonic
 bob-core-components-typography__light--xx-large--sonic
 bob-core-components-typography__light--x-large--sonic
 bob-core-components-typography__light--large--sonic
 bob-core-components-typography__light--medium-1--sonic
 bob-core-components-typography__light--medium--sonic
 bob-core-components-typography__light--small--sonic
 bob-core-components-typography__light--x-small--sonic
 bob-core-components-typography__light--xxx-large--eggplant
 bob-core-components-typography__light--xx-large--eggplant
 bob-core-components-typography__light--x-large--eggplant
 bob-core-components-typography__light--large--eggplant
 bob-core-components-typography__light--medium-1--eggplant
 bob-core-components-typography__light--medium--eggplant
 bob-core-components-typography__light--small--eggplant
 bob-core-components-typography__light--x-small--eggplant

* */
