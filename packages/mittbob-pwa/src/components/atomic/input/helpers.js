import { IMaskMixin } from 'react-imask';
import React from 'react';
import PredefinedMask from './PredefinedMask';
import { StyledInput } from './input.styled';

export const getMaskProps = ({ mask }) => {
  if (typeof mask === 'string') {
    return {
      ...PredefinedMask[mask],
    };
  }
  if (mask) {
    return { mask };
  }
  return {};
};

export const getInputComponent = ({ mask }) => {
  if (mask) {
    return IMaskMixin(({ inputRef: maskedRef, ...maskedProps }) => {
      return <StyledInput {...maskedProps} ref={maskedRef} />;
    });
  }
  return StyledInput;
};
