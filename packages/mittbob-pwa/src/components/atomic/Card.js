import React from 'react';
import PropTypes from 'prop-types';
import { Container, Actions, Header, CloseButton } from './card/card.styles';

const Card = ({ children, onClose, ...other }) => (
  <Container {...other}>
    {onClose && <CloseButton onClick={onClose} />}
    {children}
  </Container>
);

Card.Actions = Actions;
Card.Header = Header;

Card.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

Card.defaultProps = {
  children: undefined,
  onClose: undefined,
};

export default Card;
