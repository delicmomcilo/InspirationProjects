import React from 'react';
import PropTypes from 'prop-types';
import { StyledTileButton, StyledIcon } from './tile/tile.style';

const Tile = ({ title, children, iconName, ...rest }) => {
  return (
    <StyledTileButton {...rest} title={title}>
      {iconName && <StyledIcon name={iconName} />}
    </StyledTileButton>
  );
};

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  children: PropTypes.node,
};

Tile.defaultProps = {
  iconName: undefined,
  children: undefined,
};

export default Tile;
