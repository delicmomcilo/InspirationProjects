import React from "react";
import { IDisplayIcon } from "./item.types"
import Icon from "../../Icon";
import ListItemIcon from "./ListItemIcon";

const SuccessIconContainer: React.FC<IDisplayIcon> = ({ 
  show,
  dense,
 }) => show ? <ListItemIcon icon={<Icon name="Check" color="success" />} dense={dense} /> : null;

export default SuccessIconContainer;