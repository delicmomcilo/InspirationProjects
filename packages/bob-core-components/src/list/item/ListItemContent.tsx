import React from "react";
import Grid from "../../Grid";
import ListItemIcon from "./ListItemIcon"
import WarningIconContainer from "./WarningIconContainer"
import SuccessIconContainer from "./SuccessIconContainer"
import { IListItemContent } from "./item.types"
import Typography from "../../Typography";

const ListItemContent: React.FC<IListItemContent> = ({ 
  dense,
  warning,
  success,
  icon,
  title,
  subtitle,
  children,
 }) => (
  <Grid container spacing={2} alignItems="center">
    <WarningIconContainer show={warning} dense={dense} /> 
    <SuccessIconContainer show={success} dense={dense} />
    <ListItemIcon icon={icon} dense={dense} />
    {(subtitle || title) && (
      <Grid item>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Typography fontWeight={dense ? 'regular': 'semibold'} gutterBottom size={dense ? 'regular' : 'large'}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography size="small" color="light-grey">
              {subtitle}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    )}
    {children && <Grid item>{children}</Grid>}
  </Grid>
 );

export default ListItemContent;



