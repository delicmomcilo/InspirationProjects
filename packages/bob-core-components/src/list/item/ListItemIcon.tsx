import React from "react";
import { IListItemIcon } from "./item.types"
import { IconContainer} from "./item.styles";
import Grid from "../../Grid";

const ListItemIcon: React.FC<IListItemIcon> = ({ 
  dense,
  icon,
 }) => (icon !== null ? <Grid item><IconContainer dense={dense}>{icon}</IconContainer></Grid> : null);

export default ListItemIcon;