import { IMaskMixin } from 'react-imask';
import React from 'react';
import PredefinedMask from './PredefinedMask';
import { StyledInput } from './input.styled';
import { Mask, IMaskMixinReturnType} from './input.types';

export const getMaskProps = ({ mask }: Mask) => {
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

export const getInputComponent = ({ mask }: Mask | {mask: undefined}) => {
  if (mask) {
    return IMaskMixin(({ inputRef: maskedRef, ...maskedProps }: IMaskMixinReturnType) => {
      return <StyledInput {...maskedProps} ref={maskedRef} />;
    });
  }
  return StyledInput;
};
