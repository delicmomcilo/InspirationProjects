import React from 'react';
import { ArrowContainer } from './button.styles';
import AnimationArrow from '../arrowButton/AnimatableArrow.svg';

// eslint-disable-next-line
export default ({ variant, loading }) => {
  if (
    loading ||
    variant === 'icon' ||
    variant === 'quaternary' ||
    variant === 'quinary' ||
    variant === 'senary'
  )
    return null;
  return (
    <ArrowContainer>
      <AnimationArrow />
    </ArrowContainer>
  );
};
