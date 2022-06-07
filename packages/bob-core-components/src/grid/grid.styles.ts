import styled, { css } from "styled-components";
import { IProps } from "./grid.types";
import { Breakpoints } from '../extended';

const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// function generateGrid(globalStyles, theme, breakpoint) {
function generateGrid({ theme, ...other }: Partial<IProps>) {
  if (!theme) throw new Error('[Grid] Generate grid Theme is not defined');
  const breaks: Partial<Breakpoints> = {};
  const otherAsBP = other as Breakpoints;
  Object.keys(theme.breakpoints).forEach((k) => {
    const key = k as keyof Breakpoints;
    if (otherAsBP[key]) breaks[key] = otherAsBP[key];
  });
  const add = (prop: keyof Breakpoints, val: true | "auto" | number) => {
    if (GRID_SIZES.findIndex(s => s === val) <= -1)
      throw new Error("GRID SIZE not supported");
    if (val === true) {
      // For the auto layouting
      return css`
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
      `;
    }

    if (val === "auto") {
      return css`
        flex-basis: auto;
        flex-grow: 0;
        max-width: none;
      `;
    }

    // Keep 7 significant numbers.
    const width = `${Math.round((val / 12) * 10e7) / 10e5}%`;

    if (prop === "xs")
      // no need for breakpoint on xs
      return css`
        flex-basis: ${width};
        flex-grow: 0;
        max-width: ${width};
      `;
    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
    return css`
      ${theme.breakpoints.up(prop)} {
        flex-basis: ${width};
        flex-grow: 0;
        max-width: ${width};
      }
    `;
  };
  const styles = [];
  if (breaks.xs) styles.push(add("xs", breaks.xs));
  if (breaks.sm) styles.push(add("sm", breaks.sm));
  if (breaks.md) styles.push(add("md", breaks.md));
  if (breaks.lg) styles.push(add("lg", breaks.lg));
  if (breaks.xl) styles.push(add("xl", breaks.xl));
  return styles;
}

function getOffset(val: string, div = 1) {
  const parse = parseFloat(val);
  return `${parse / div}${String(val).replace(String(parse), "") || "rem"}`;
}

const generateGutter = ({
  theme,
  container,
  spacing,
}: Partial<IProps>) => {
  if (!theme) throw new Error('[Grid] Theme is not defined');
  const s = SPACINGS.find(sp => spacing === sp) || 0;
  const themeSpacing = theme.spacing(s);
  if (!container || themeSpacing === "0px" || themeSpacing === "0rem") {
    return;
  }
  return css`
    margin: -${getOffset(themeSpacing, 2)};
    width: calc(100% + ${getOffset(themeSpacing)});

    & > .item {
      padding: ${getOffset(themeSpacing, 2)};
    }
  `;
};

// Default CSS values
// // flex: '0 1 auto',
// // flexDirection: 'row',
// // alignItems: 'flex-start',
// // flexWrap: 'nowrap',
// // justifyContent: 'flex-start',

const container = ({ container }: Partial<IProps>) =>
  container &&
  css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `;
const root = () => css``;
const item = ({ item }: Partial<IProps>) => item && css``;
const zeroMinWidth = ({ zeroMinWidth }: Partial<IProps>) =>
  zeroMinWidth && css``;

const direction = ({ direction = 'row' }: Partial<IProps>) => css`flex-direction: ${direction}`;
const wrap = ({ wrap = 'wrap' }: Partial<IProps>) => css`flex-wrap: ${wrap}`
const alignItems = ({ alignItems = "stretch" }: Partial<IProps>) => css`
  align-items: ${alignItems};
`;
const alignContent = ({ alignContent = "stretch" }: Partial<IProps>) => css`
  align-content: ${alignContent};
`;
const justifyContent = ({ justifyContent = "flex-start" }: Partial<IProps>) =>
  css`
    justify-content: ${justifyContent};
  `;

export const StyledGrid = styled.div<IProps>`
  ${root};
  ${container};
  ${item};
  ${zeroMinWidth};
  ${direction};
  ${wrap};
  ${alignContent};
  ${alignItems};
  ${justifyContent};
  ${generateGutter};
  ${generateGrid};
`;
