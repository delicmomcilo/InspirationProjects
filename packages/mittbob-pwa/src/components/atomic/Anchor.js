import React from 'react';
import PropTypes from 'prop-types';
import { StyledAnchor } from './anchor/anchor.styles';

const Anchor = ({ children, ...rest }) => (
  <StyledAnchor {...rest}>{children}</StyledAnchor>
);

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Anchor;
