import React, { forwardRef, useMemo } from "react";
import {
  Container,
  InputContainer,
  InputLabel,
  InputError,
  Adornment
} from "./input/input.styled";
import Radio from "./input/Radio";
import { LIBRARY_NAME } from "./constants";
import PredefinedMask from "./input/PredefinedMask";
import { getInputComponent, getMaskProps } from "./input/helpers";
import Checkbox from "./input/Checkbox";
import { IProps } from "./input/input.types";
import Icon from "./Icon";
import { withDefaultTheme } from './ThemeProvider';

const NAME = `${LIBRARY_NAME}__input`;

const Input = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const {
    error,
    label,
    className,
    id,
    disabled,
    type,
    mask,
    iconName,
    stickLabel,
    ...rest
  } = props;

  const inputId = id || `${NAME}--id-${btoa(JSON.stringify(props))}`;
  const inputProps = {
    ref,
    type,
    iconName,
    id: inputId,
    disabled,
    required: true,
    error,
    ...rest
  };
  const InputComponent = useMemo(() => getInputComponent({ mask }), [mask]);
  if (type === "radio")
    return <Radio className={className} label={label} {...inputProps} />;
  if (type === "checkbox")
    return <Checkbox className={className} label={label} {...inputProps} />;
  const maskProps = mask ? getMaskProps({ mask }) : {};
  return (
    <Container className={className}>
      <InputContainer>
        <InputComponent  {...inputProps} {...maskProps} />
        <InputLabel stickLabel={stickLabel} color="coal" component="label" size="medium" fontWeight="regular" htmlFor={inputId}>{label || ''}</InputLabel>
        {iconName && (
          <Adornment>
            <Icon name={iconName} size="medium" />
          </Adornment>
        )}
      </InputContainer>
      {error && <InputError>{error}</InputError>}
    </Container>
  );
});

export const PREDEFINED_MASK = Object.keys(PredefinedMask).reduce(
  (acc, key) => ({ ...acc, [key]: key }),
  {
    emailPhone: undefined
  }
);

export default withDefaultTheme(Input);
