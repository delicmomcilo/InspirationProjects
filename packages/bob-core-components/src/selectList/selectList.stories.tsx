import React from "react";
import SelectList from "../SelectList";
import {Item } from '../List';
import { Story } from "@storybook/react";
import { IProps } from "./selectList.types";

export default {
  title: "SelectList",
  parameters: {
    info: { inline: true },
    actions: { argTypesRegex: "^on.*" }
  },
  argTypes: {
    onSelect: { action: "changed" },

  }
};

const Template: Story<IProps> = args => (
  <SelectList {...args}>
    <Item dense>Number #1</Item>
    <Item dense selected>Number #2</Item>
    <Item dense>Number #3</Item>
    <Item dense>Number #4</Item>
    <Item dense>Number #5</Item>
    <Item dense>Number #6</Item>
  </SelectList>

);

export const Component = Template.bind({});

Component.args = {
  // label: "Label",
  // error: "",
  // placeholder: "",
  // mask: "",
  // value: {left: 0.2, right: 0.4}

};
