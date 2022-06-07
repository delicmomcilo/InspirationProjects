import React from "react";
import Slider from "../Slider";
import { Story } from "@storybook/react";
import { IProps } from "./slider.types";

export default {
  title: "Slider",
  parameters: {
    info: { inline: true },
    actions: { argTypesRegex: "^on.*" }
  },
  argTypes: {
    // mask: {
    //   control: {
    //     type: 'select',
    //     options: [null].concat(Object.values(PREDEFINED_MASK))
    //   }
    // },
    // label: { control: "text" },
    // error: { control: "text" },
    // placeholder: { control: "text" },
    onChange: { action: "changed" },
    initialValue: { control: 'object'}
    // iconName: {
    //   control: {
    //     type: 'select',
    //     options: [null].concat(Object.keys(icons))
    //   }
    // }
  }
};

const Template: Story<IProps> = args => (
  <div style={{ width: "100%", height: "10rem" }}>
    <Slider {...args} />
  </div>
);

export const Component = Template.bind({});

Component.args = {
  label: "Label",
  error: "",
  placeholder: "",
  mask: "",
  initialValue: {left: 0.2, right: 0.4}

};
