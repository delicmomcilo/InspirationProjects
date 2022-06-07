import React from "react";
import List from "../List";
import ListItem from "./ListItem"

export default {
  title: "List",
};

export const Component = (args) => (
  <List>
    {Array.from(Array(12).fill({ title: "Title", subtitle: "Sub" })).map(i => (
      <ListItem {...args}/>
    ))}
  </List>
);

Component.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  warning: false,
  dense: false,
  success: false,
  children: ''
};