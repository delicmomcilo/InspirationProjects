import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledButton, ContentSpan, TextSpan, TextContainerSpan } from './button/button.styles';
import { NAME, ARROW_POSITION } from './button/constants';
import { renderChildren } from './button/helpers';
import Icon from './button/Icon';
import Arrow from './button/Arrow';

const Button = forwardRef(
  (
    {
      arrowPosition,
      arrowDirection,
      children,
      disabled,
      variant,
      iconName,
      iconProps,
      title,
      loading,
      showArrow,
      ...rest
    },
    ref,
  ) => {
    const text = title || (typeof children === 'string' && children);
    return (
      <StyledButton
        direction={arrowDirection || arrowPosition}
        ref={ref}
        variant={variant}
        loading={loading ? true : undefined}
        disabled={disabled || loading}
        showArrow={showArrow}
        {...rest}
      >
        {(iconName || text) && (
          <ContentSpan>
            {iconName && <Icon name={iconName} {...iconProps} />}
            {text && (
              <TextContainerSpan
                showArrow={showArrow}
                direction={arrowDirection || arrowPosition}
                position={arrowPosition}
              >
                <TextSpan>{text}</TextSpan>
                {showArrow && <Arrow variant={variant} loading={loading} />}
              </TextContainerSpan>
            )}
          </ContentSpan>
        )}
        {renderChildren(children)}
      </StyledButton>
    );
  },
);

Button.NAME = NAME;
Button.arrowPosition = ARROW_POSITION;

Button.defaultProps = {
  arrowPosition: ARROW_POSITION.RIGHT,
  arrowDirection: undefined,
  disabled: false,
  loading: false,
  variant: 'primary',
  children: undefined,
  iconName: undefined,
  iconProps: undefined,
  title: undefined,
  showArrow: true,
  size: 'large',
};

Button.propTypes = {
  arrowPosition: PropTypes.string,
  arrowDirection: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconName: PropTypes.string,
  iconProps: PropTypes.shape({}),
  variant: PropTypes.string,
  title: PropTypes.string,
  showArrow: PropTypes.bool,
  size: PropTypes.string,
};

export default Button;
