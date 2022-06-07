import { Story } from "@storybook/react";
import ProgressIndicator from "../ProgressIndicator";
import React from "react";
import { IProps } from "./progressIndicator.types";
import Card from '../Card';
import Typography from '../Typography';

const Template: Story<IProps> = args => <ProgressIndicator {...args} />;

export const Example: Story<IProps> = args => (
  <Card>
    <ProgressIndicator {...args} />
    <Typography>Some placement</Typography>
  </Card>
);

export const Component = Template.bind({});

Component.args = {
  size: "medium"
};

export default {
  title: "ProgressIndicator",
  parameters: {
    info: { inline: true }
  }
};
