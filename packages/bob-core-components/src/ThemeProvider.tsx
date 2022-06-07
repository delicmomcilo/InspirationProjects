import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  forwardRef,
  ReactNode,
  useContext,
  useMemo,
} from 'react';
import { ThemeProvider, ThemeContext } from "styled-components";
import { IBOBCCThemeProvider } from "./theme/types";
import { createTheme, THEME_KEY } from './theme/helpers';
const BOBCCThemeProvider = ({ children, theme }: IBOBCCThemeProvider) => {
  const memoizedTheme = useMemo(() => createTheme(theme), [theme]);
  return (
    <ThemeProvider theme={memoizedTheme}>
      {children}
    </ThemeProvider>
  );
};

export const withDefaultTheme = (
  Component: React.ComponentType<any>
) => forwardRef<HTMLElement | ReactNode, ComponentPropsWithoutRef<any>>((props: {}, ref) => {
  const theme = useContext(ThemeContext);
  if (!theme || !theme[THEME_KEY]) {
    console.warn(
      "Theme does not exist or not using bob-core-components ThemeProvider. Injecting ThemeProvider"
    );
    return (
      <BOBCCThemeProvider>
        <Component ref={ref} {...props} />
      </BOBCCThemeProvider>
    );
  }
  return <Component ref={ref} {...props} />;
});

export default BOBCCThemeProvider;
