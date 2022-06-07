import PropTypes from 'prop-types';
import React, { forwardRef, useMemo } from 'react';
import { Container, InputContainer, InputLabel, InputError } from './input/input.styled';
import Radio from './input/Radio';
import { LIBRARY_NAME } from './constants';
import PredefinedMask from './input/PredefinedMask';
import { getInputComponent, getMaskProps } from './input/helpers';
import Checkbox from './input/Checkbox';

const NAME = `${LIBRARY_NAME}__input`;

const Input = forwardRef((props, ref) => {
  const { error, label, className, id, disabled, type, mask, ...rest } = props;

  const inputId = id || `${NAME}--id-${btoa(JSON.stringify(props))}`;
  const inputProps = {
    ref,
    type,
    id: inputId,
    disabled,
    required: true,
    error,
    ...rest,
  };
  const InputComponent = useMemo(() => getInputComponent({ mask }), [mask]);
  if (type === 'radio') return <Radio className={className} label={label} {...inputProps} />;
  if (type === 'checkbox') return <Checkbox className={className} label={label} {...inputProps} />;
  const maskProps = getMaskProps(props);
  return (
    <Container className={className} disabled={disabled}>
      <InputContainer>
        <InputComponent {...inputProps} {...maskProps} />
        <InputLabel htmlFor={inputId}>{label}</InputLabel>
      </InputContainer>
      {error && <InputError>{error}</InputError>}
    </Container>
  );
});

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  mask: PropTypes.string,
};

Input.defaultProps = {
  id: undefined,
  className: '',
  disabled: false,
  onChange: undefined,
  label: '',
  type: '',
  error: '',
  mask: undefined,
};

export const PREDEFINED_MASK = Object.keys(PredefinedMask).reduce(
  (acc, key) => ({ ...acc, [key]: key }),
  {
    emailPhone: undefined,
  },
);

export default Input;
