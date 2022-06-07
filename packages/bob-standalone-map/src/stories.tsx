import React from "react";
import Main from "./Main";
import { Story } from "@storybook/react";
import { IMain } from './types';

export default {
  title: "Main",
  parameters: {
    info: { inline: true }
  },
  argTypes: {
    maxHeight: { control: 'text'},
    maxWidth: { control: 'text'},
    height: { control: 'text'},
    width: { control: 'text'},
  }
};

const Template: Story<IMain> = args => <Main {...args} />;

export const Component = Template.bind({});

Component.args = {
  maxWidth: '',
  maxHeight: '',
  height: '30rem',
  width: '',
  api: {
    clientsEndpoint: '/dev-api/housing/v1/Client?clientTypeCodes=2&withGeolocation=true'
  },
  googleApiProps: {
    apiKey: 'AIzaSyDgPtDJN6R3uhDFq_RjGKxKRVJf_9ikWiI',
    version: '3.42'
  }
};
