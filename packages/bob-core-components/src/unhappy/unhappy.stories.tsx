import React from 'react';
import { Story } from "@storybook/react";
import { IProps } from './unhappy.types';
import Unhappy from '../Unhappy';

export default {
  title: "Unhappy",
};

const Template: Story<IProps> = args => {
  return (
    <Unhappy
      iconName="Search"
      iconProps={{size:"xx-large"}}
      title="Tittel"
      text="Du finner ingenting her"
    />
  );
};

export const Component = Template.bind({});