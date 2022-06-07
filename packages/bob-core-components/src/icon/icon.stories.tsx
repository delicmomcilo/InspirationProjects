import { boolean, select } from "@storybook/addon-knobs";
import React from "react";
import Icon from "../Icon";
import variables from '../theme/variables';
// import { sizes } from "./icon.styles";
import icons from "./icons";
import { IconNames } from "./types";
import { Story } from "@storybook/react";
import { IProps } from "../input/input.types";

export default {
  title: "Icon",
  parameters: {
    info: { inline: true, source: false }
  },
  argTypes: {
    round: {
      control: "boolean"
    },
    size: {
      control: {
        type: "select",
        options: Object.keys(variables.sizes.icon.sizes)
      }
    }
  }
};

const Template: Story<IProps> = args => {
  const content = (Object.keys(icons) as Array<IconNames>).map(k => (
    <Icon name={k} {...args} />
  ));
  return <div>{content}</div>;
};

export const All = Template.bind({});

All.args = {
  size: "medium",
  round: false
};
