import { StyledTypography } from './typography/typography.styles';
import React from 'react';
import {IStyledTypography } from './typography/typography.types';
import { withDefaultTheme } from './ThemeProvider';

const Typography =  (props: IStyledTypography) => <StyledTypography {...props} />;

export default withDefaultTheme(Typography);