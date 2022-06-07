import React from 'react';
import PropTypes from 'prop-types';
import {
  TileHeaderWrapper,
  StyledTileSet,
  TopCircle,
  TilesetHeaderTitle,
  StyledIcon,
  StyledTileMenu,
} from './tileMenu/tileMenu.styles';

const TileMenu = ({ title, children, iconName }) => {
  return (
    <StyledTileMenu>
      <TileHeaderWrapper>
        <TopCircle>
          <StyledIcon name={iconName} />
        </TopCircle>
        <TilesetHeaderTitle>{title}</TilesetHeaderTitle>
      </TileHeaderWrapper>
      <StyledTileSet>{children}</StyledTileSet>
    </StyledTileMenu>
  );
};

TileMenu.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default TileMenu;
