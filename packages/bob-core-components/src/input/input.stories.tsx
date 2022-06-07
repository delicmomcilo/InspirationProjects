import React from "react";
import Input, { PREDEFINED_MASK } from "../Input";
import icons from '../icon/icons';
import { Story } from "@storybook/react";
import { IProps } from "./input.types";

export default {
  title: "Input",
  parameters: {
    info: { inline: true },
    actions: { argTypesRegex: "^on.*" }
  },
  argTypes: {
    mask: {
      control: {
        type: 'select',
        options: [null].concat(Object.values(PREDEFINED_MASK))
      }
    },
    label: { control: "text" },
    error: { control: "text" },
    placeholder: { control: "text" },
    onChange: { action: "changed" },
    iconName: {
      control: {
        type: 'select',
        options: [null].concat(Object.keys(icons))
      }
    }
  }
};

const Template: Story<IProps> = args => (
  <Input
    {...args}
  />
);

export const Component = Template.bind({});

export const Checkbox = Template.bind({});

Checkbox.args = {
  type: 'checkbox',
  label: "Label"
}

Component.args = {
  label: "Label",
  error: "",
  placeholder: "",
  mask: '',
  stickLabel: false
};