import React from 'react';
import { DefaultTheme } from 'styled-components';

export interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  error?: string;
  variant?: 'error' | 'default';
  theme?: DefaultTheme
}
