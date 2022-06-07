import React from "react";
import Autocomplete from "../Autocomplete";
import { Story } from "@storybook/react";
import { IProps } from "./autocomplete.types";

export default {
  title: "Autocomplete",
  parameters: {
    info: { inline: true },
    actions: { argTypesRegex: "^on.*" }
  },
  argTypes: {
    onChange: { action: "changed" },
    options: { control: { type: "array" } },
    label: { control: { type: "text" } },
    error: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
    getEmptyListComponent: { control: { type: "boolean" } },
    emptyListLabel: { control: { type: "text" } }
  }
};

const Template: Story<
  IProps | IProps["inputProps"] | IProps["selectListProps"]
> = args => {
  const {
    options,
    onChange,
    emptyListLabel,
    getEmptyListComponent,
    ...inputProps
  } = args;
  const getEmptyListLabel = emptyListLabel ? () => emptyListLabel : undefined;
  return (
    <Autocomplete
      onChange={onChange}
      getEmptyListLabel={getEmptyListLabel}
      getEmptyListComponent={getEmptyListComponent}
      options={options}
      inputProps={inputProps}
    />
  );
};

export const Component = Template.bind({});

Component.args = {
  label: "Label",
  error: "",
  placeholder: "",
  emptyListLabel: "",
  getEmptyListComponent: false,
  options: [
    "Jens August",
    "Juni A. Hansen",
    "Freddy Mercury",
    "Jan Teigen",
    "Teddy Roosevelt",
    "Kurt Cobain jr",
    "Jens August jr",
    "Juni A. Hansen jr",
    "Freddy Mercury jr",
    "Jan Teigen jr",
    "Teddy Roosevelt jr",
    "Kurt Cobain jr"
  ]
};
