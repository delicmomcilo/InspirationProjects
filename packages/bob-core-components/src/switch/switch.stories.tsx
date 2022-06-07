import React from "react";
import { Story } from "@storybook/react";
import { IProps } from "./switch.types";
import Switch from '../Switch';

export default {
  title: "Switch",
  parameters: {
    info: { inline: true },
    actions: { argTypesRegex: "^on.*" }
  },
  argTypes: {
    onChange: { action: "changed" },
    initialValue: { control: 'object'}

  }
};

const Template: Story<IProps> = args => (
  <Switch {...args}/>
);

export const Component = Template.bind({});

Component.args = {


};
