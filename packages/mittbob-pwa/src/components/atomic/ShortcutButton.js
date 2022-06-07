import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Button,
  GreenDot,
  IconContainer,
  LowerRightIconContainer,
  Number,
  Label,
} from './shortcutButton/shortcutButton.styles';
import Icon from './Icon';

const ShortcutButton = ({
  iconName,
  label,
  lowerRightIcon,
  number,
  showGreenDot,
  disabled,
  iconProps,
  ...rest
}) => {
  const buttonId = `shortcut_button${btoa(label)}`;
  const icon = <Icon name={iconName} size="x-large-1" {...iconProps} />;
  return (
    <Container>
      <Button disabled={disabled} id={buttonId} {...rest}>
        {(number || number === 0) && <Number>{number > 999 ? '> 999' : number}</Number>}
        {showGreenDot && <GreenDot />}
        {icon && <IconContainer>{icon}</IconContainer>}
        {lowerRightIcon && <LowerRightIconContainer>{lowerRightIcon}</LowerRightIconContainer>}
        <Label disabled={disabled} htmlFor={buttonId}>
          {label}
        </Label>
      </Button>
    </Container>
  );
};

ShortcutButton.propTypes = {
  disabled: PropTypes.bool,
  iconName: PropTypes.string,
  label: PropTypes.string.isRequired,
  lowerRightIcon: PropTypes.node,
  number: PropTypes.number,
  showGreenDot: PropTypes.bool,
  iconProps: PropTypes.shape({
    name: PropTypes.string,
    outlined: PropTypes.bool,
    white: PropTypes.bool,
    violet: PropTypes.bool,
  }),
};

ShortcutButton.defaultProps = {
  disabled: false,
  iconName: undefined,
  lowerRightIcon: undefined,
  number: undefined,
  showGreenDot: false,
  iconProps: {},
};

export default ShortcutButton;
