import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { HiddenCheckbox, Container, StyledCheckbox } from './checkbox/checkbox.styles';

const Checkbox = forwardRef(({ disabled, id, label, error, variant: vari, ...rest }, ref) => {
  const inputId =
    id || `bob-core-components__checkbox--id-${btoa(JSON.stringify({ label, ...rest }))}`;
  const labelClassName = error
    ? 'bob-core-components-typography__regular--medium--rosso'
    : 'bob-core-components-typography__regular--medium--sonic';
  const variant = error ? 'error' : vari;
  return (
    <Container disabled={disabled} {...rest}>
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

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  variant: PropTypes.string,
};

Checkbox.defaultProps = {
  className: undefined,
  disabled: false,
  label: undefined,
  id: undefined,
  variant: 'default',
  error: undefined,
};

export default Checkbox;
