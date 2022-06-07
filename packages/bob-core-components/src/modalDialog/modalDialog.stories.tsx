import React from "react";
import ModalDialog from "../ModalDialog";
import { Story } from "@storybook/react";
import { IProps } from "../input/input.types";

export default { title: "ModalDialog" };

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque arcu non quam euismod varius. Morbi aliquet augue ipsum, id vehicula justo congue sed. Proin dignissim nibh a elementum porttitor. Donec venenatis lacus eget velit lobortis blandit. Vestibulum maximus pretium diam quis malesuada. Nunc porta feugiat dolor, in consequat mauris commodo tempor. Nulla porta egestas tortor, vitae sodales nisl elementum in. Ut feugiat eros eu bibendum varius.";
const defaultTitle = "A title";
const Template: Story<IProps> = args => <ModalDialog {...args} />;

export const Component = Template.bind({});
export const WithCustomBeforeContent = Template.bind({});

Component.args = {
  title: defaultTitle,
  children: defaultContent,
  icon: undefined,
  open: true,
  onClose: () => {}
};

WithCustomBeforeContent.args = {
  title: defaultTitle,
  children: defaultContent,
  icon: undefined,
  open: true,
  beforeContent: (
    <div
      style={{
        position: "fixed",
        backgroundColor: "blue",
        width: "100%",
        height: "100%"
      }}
    ></div>
  )
};
