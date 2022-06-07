import React from 'react';

export interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  error?: string;
  variant?: 'error' | 'default';
}

