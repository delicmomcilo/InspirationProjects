import React from "react";
import Grid from "../Grid";
import Card from "../Card";
import { Story } from "@storybook/react";
import { IProps } from "./grid.types";

const breakpointControl = {
  type: "inline-radio",
  options: ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};

export default {
  title: "Grid",
  argTypes: {
    spacing: {
      control: {
        type: "inline-radio",
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    xs: { control: breakpointControl },
    sm: { control: breakpointControl },
    md: { control: breakpointControl },
    lg: { control: breakpointControl },
    xl: { control: breakpointControl },
    alignItems: {
      control: {
        type: "inline-radio",
        options: ["flex-start", "center", "flex-end", "stretch", "baseline"]
      }
    },
    alignContent: {
      control: {
        type: "inline-radio",
        options: [
          "stretch",
          "center",
          "flex-start",
          "flex-end",
          "space-between",
          "space-around"
        ]
      }
    },
    justifyContent: {
      control: {
        type: "inline-radio",
        options: [
          "flex-start",
          "center",
          "flex-end",
          "space-between",
          "space-around",
          "space-evenly"
        ]
      }
    },
    direction: {
      control: {
        type: "inline-radio",
        options: ["row", "row-reverse", "column", "column-reverse"]
      }
    }
  }
};

const Template: Story<IProps> = props => {
  const { spacing, ...other } = props;
  return (
    <Grid container spacing={spacing} {...other}>
      <Grid item {...other}>
        <Card>Item #1</Card>
      </Grid>
      <Grid item {...other}>
        <Card>Item #2</Card>
      </Grid>
      <Grid item {...other}>
        <Card>Item #3</Card>
      </Grid>
      <Grid item {...other}>
        <Card>Item #4</Card>
      </Grid>
    </Grid>
  );
};

export const Component = Template.bind({});

export const Advanced: Story<IProps> = props => {
  const { spacing, ...other } = props;
  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12} md={8}>
        <Grid container spacing={spacing} {...other}>
          <Grid item xs={12} md>
            <Card>Item #1 Xs 12</Card>
          </Grid>
          <Grid item xs md={6}>
            <Card>Item #2 xs md=6</Card>
          </Grid>
          <Grid item xs={6} md>
            <Card>Item #3 xs=6</Card>
          </Grid>
          <Grid item xs md>
            <Card>Item #4 xs</Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={spacing} {...other}>
          <Grid item xs={12} md>
            <Card>Item #1 Xs 12</Card>
          </Grid>
          <Grid item xs md={6}>
            <Card>Item #2 xs md=6</Card>
          </Grid>
          <Grid item xs={6} md>
            <Card>Item #3 xs=6</Card>
          </Grid>
          <Grid item xs md>
            <Card>Item #4 xs</Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Component.args = {
  alignContent: "stretch",
  alignItems: "stretch",
  component: "div",
  direction: "row",
  justifyContent: "flex-start",
  lg: 0,
  md: 0,
  sm: 0,
  spacing: 2,
  wrap: "wrap",
  xl: 0,
  xs: 6,
  zeroMinWidth: false
};

Advanced.args = {
  alignContent: "stretch",
  alignItems: "stretch",
  component: "div",
  direction: "row",
  justifyContent: "flex-start",
  lg: null,
  md: null,
  sm: null,
  spacing: 2,
  wrap: "wrap",
  xl: null,
  xs: 6,
  zeroMinWidth: false
};
