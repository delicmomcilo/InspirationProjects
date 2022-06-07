import React from "react";
import icons from "./icon/icons";
import { IProps } from "./icon/types";
import { withDefaultTheme } from './ThemeProvider';

export const Icon: React.FC<IProps> = ({
  name,
  color = "primary",
  size = "large",
  ...rest
}) => {
  const Component = icons[name];
  if (!Component) throw new Error(`Icon with name ${name} does not exist.`);
  return <Component color={color} size={size} {...rest} />;
};

export default withDefaultTheme(Icon);
