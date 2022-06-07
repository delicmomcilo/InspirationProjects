import React, { forwardRef } from 'react';
import { HiddenCheckbox, Container, StyledCheckbox } from './checkbox/checkbox.styles';
import { IProps } from './checkbox/types';

const Checkbox = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { disabled, id, label, error, variant: vari, className, ...rest } = props;
  const inputId =
    id || `bob-core-components__checkbox--id-${btoa(JSON.stringify({ label, ...rest }))}`;
  const labelClassName = error
    ? 'bob-core-components-typography__regular--medium--rosso'
    : 'bob-core-components-typography__regular--medium--sonic';
  const variant = error ? 'error' : vari;
  return (
    <Container disabled={disabled} className={className}>
      <HiddenCheckbox disabled={disabled} id={inputId} ref={ref} variant={variant} {...rest} />
      {label && (
        <StyledCheckbox
          disabled={disabled}
          variant={variant}
          className={labelClassName}
          htmlFor={inputId}
        >
          {label}
        </StyledCheckbox>
      )}
    </Container>
  );
});

export default Checkbox;
