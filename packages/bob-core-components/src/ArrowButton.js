import React, { forwardRef } from 'react';
import { StyledButton } from './arrowButton/arrowButton.styles';
import Arrow from './arrowButton/Arrow';
import { ARROW_LENGTH, ARROW_POSITION } from './button/constants';

const ArrowButton = forwardRef((props, ref) => {
  return (
    <StyledButton ref={ref} {...props}>
      <Arrow />
    </StyledButton>
  );
});

ArrowButton.LENGTH = ARROW_LENGTH;
ArrowButton.DIRECTION = ARROW_POSITION;

export default ArrowButton;
