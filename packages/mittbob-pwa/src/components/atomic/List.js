import React from 'react';
import PropTypes from 'prop-types';
import { StyledUl } from './list/list.styles';
import Item from './list/Item';

const List = ({ children, ...rest }) => (
  <StyledUl {...rest}>{children}</StyledUl>
);

List.Item = Item;
List.ItemLink = Item.Link;
List.Link = Item.Link;

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
