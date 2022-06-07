import React from 'react';
import PropTypes from 'prop-types';
import { StyledKicker } from './kicker/kicker.styles';

const Kicker = ({ children }) => <StyledKicker>{children}</StyledKicker>;

Kicker.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Kicker;
