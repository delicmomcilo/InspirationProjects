import React from "react";
import {
  StyledLi,
  Content,
} from "./item/item.styles";
import { IListItem } from "./item/item.types"
import ListItemContent from "./item/ListItemContent";

const ListItem: React.FC<IListItem> = ({ 
  children,
  dense,
  icon,
  subtitle,
  title,
  success,
  warning,
  selected,
  ...other }) => {
  return (
    <StyledLi {...other}>
      <Content dense={dense} selected={selected}>
        <ListItemContent 
          children={children} 
          dense={dense} 
          icon={icon} 
          title={title} 
          subtitle={subtitle} 
          success={success} 
          warning={warning}
        />
      </Content>
    </StyledLi>
  );
};

export default ListItem;
