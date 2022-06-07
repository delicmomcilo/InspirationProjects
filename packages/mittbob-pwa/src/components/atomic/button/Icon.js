import React from 'react';
import { IconContainer } from './button.styles';
import Icon from '../Icon';

export default props =>
  props.name ? ( //eslint-disable-line
    <IconContainer>
      <Icon {...props} />
    </IconContainer>
  ) : null;
