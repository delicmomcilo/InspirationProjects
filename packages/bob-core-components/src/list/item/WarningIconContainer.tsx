import React from "react";
import { IDisplayIcon } from "./item.types"
import Icon from "../../Icon";
import ListItemIcon from "./ListItemIcon";

const WarningIconContainer: React.FC<IDisplayIcon> = ({ 
  show,
  dense,
 }) => show ? <ListItemIcon icon={<Icon name="Warning" color="warning" />} dense={dense} /> : null;

export default WarningIconContainer;