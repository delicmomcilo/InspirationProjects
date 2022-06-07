import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { StyledGrid } from './grid/grid.styles';
import { IProps} from './grid/grid.types';

// Copy and rewrite of https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Grid/Grid.js

const Grid = forwardRef((props: IProps , ref) =>  {
  const {
    className: classNameProp,
    component: Component = 'div',
    item = false,
    ...other
  } = props;


  const className = clsx({item}, classNameProp);

  return <StyledGrid as={Component} className={className} ref={ref} item={item} {...other} />;
});

export default Grid;