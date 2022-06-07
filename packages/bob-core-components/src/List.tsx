import React, { forwardRef } from "react";
import { StyledUl } from "./list/list.styles";
import ListItem from "./list/ListItem";
import ListItemAnchor from "./list/ListItemAnchor";
import { IProps } from "./list/list.types";

const List: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IProps> & React.RefAttributes<HTMLUListElement>
> & IProps = forwardRef<HTMLUListElement, IProps>(({ children, ...rest }, ref) => (
  <StyledUl ref={ref} {...rest}>
    {children}
  </StyledUl>
));

export { ListItem, ListItemAnchor };
export default List;
