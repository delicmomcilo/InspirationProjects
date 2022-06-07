import React from "react";
import Drawer from "../Drawer";
import { Story } from "@storybook/react";
import Typography from '../Typography';
import Button from '../Button';

export default {
  title: "Drawer",
  argTypes: {
    direction: {
      control: {
        type: "inline-radio",
        options: ["left", 'right']
      }
    },
  }
};

const Template: Story<{}> = props => {
  return (
    <Drawer {...props}>
      <Typography gutterBottom color="violet" size="large">Header</Typography>
      <Typography gutterBottom>Just a normal item</Typography>
      <Typography gutterBottom>Just a normal item</Typography>
      <Typography gutterBottom>Just a normal item</Typography>
      <Button>Button here</Button>
    </Drawer>
  );
};

export const Component = Template.bind({});
Component.args = {
  open: false,
  direction: 'left',
  staggerChildren: true
};
