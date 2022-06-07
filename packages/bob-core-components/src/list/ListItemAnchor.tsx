import React from "react";
import {
  StyledA,
  Content,
} from "./item/item.styles";
import { IListAnchorItem } from "./item/item.types"
import ListItemContent from "./item/ListItemContent"

const ListItemAnchor: React.FC<IListAnchorItem> = ({ 
  children,
  dense,
  icon,
  subtitle,
  title,
  success,
  warning,
  selected,
  to,
  onClick,
  ...other }) => (
    <StyledA onClick={onClick} {...other} href={to}>
      <Content dense selected={selected}>
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
    </StyledA>
  );

export default ListItemAnchor;
