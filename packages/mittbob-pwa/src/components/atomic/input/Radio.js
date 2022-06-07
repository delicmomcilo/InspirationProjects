import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledRadio, HiddenRadio, Container, Label } from './radio/radio.styles';

const Radio = forwardRef(
  ({ className, disabled, id, label, error, variant: vari, ...rest }, ref) => {
    const inputId = id || 'bob-label-random';
    const labelClassName = error
      ? 'bob-core-components-typography__regular--medium--rosso'
      : 'bob-core-components-typography__regular--medium--sonic';
    const variant = error ? 'error' : vari;
    return (
      <Container className={className} disabled={disabled}>
        <HiddenRadio disabled={disabled} id={inputId} ref={ref} variant={variant} {...rest} />
        <StyledRadio disabled={disabled} error={error} variant={variant} />
        {label && (
          <Label disabled={disabled} variant={variant} className={labelClassName} htmlFor={inputId}>
            {label}
          </Label>
        )}
      </Container>
    );
  },
);

Radio.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  variant: PropTypes.string,
};

Radio.defaultProps = {
  className: undefined,
  disabled: false,
  label: undefined,
  id: undefined,
  variant: 'default',
  error: undefined,
};

export default Radio;
