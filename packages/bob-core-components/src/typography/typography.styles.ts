import styled from "styled-components";
import { IStyledTypography } from "./typography.types";

const getFontSize = ({
  size,
  theme
}: Pick<IStyledTypography, "size" | "theme">) => {
  if (!size) return theme.variables.sizes.fontSizes.defaultSize;
  return theme.variables.sizes.fontSizes[size] ? theme.variables.sizes.fontSizes[size] : size;
};

const getColor = ({
  color,
  theme
}: Pick<IStyledTypography, "color" | "theme">) => {
  if (!color) return theme.variables.colors.default;
  return theme.variables.colors[color] || color;
};


export const StyledTypography = styled.div<IStyledTypography>`
  text-align: ${({ textAlign = 'left'}) => textAlign};
  font-weight: ${({ fontWeight = "400" }) => fontWeight};
  font-size: ${getFontSize};
  color: ${getColor};
  ${({ gutterBottom, theme }) =>
    gutterBottom && `padding-bottom: ${theme.variables.sizes.gutterBottom}`};
`;
