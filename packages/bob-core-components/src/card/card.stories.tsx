import React from "react";
import { action } from "@storybook/addon-actions";
import Card from "../Card";
import Button from "../Button";
import { Story } from "@storybook/react";
import { IImage } from './types';
import Typography from '../Typography';


interface ITemplate {
  title: string,
  toggleCloseButton: boolean,
  textContent: string,
  showActions: boolean,
  imgSrc: string,
}

export default {
  title: "Card",
  parameters: {
    info: { inline: true }
  },
  argTypes: {
    imgSrc: {
      control: {
        type: "select",
        options: [
          null,
          "https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/479009/pexels-photo-479009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        ]
      }
    },
    objectFit: {
      type: "radio",
      options: ["contain", "cover"]
    }
  }
};

const defaultText = `Lorem ipsum text here.Lorem ipsum text here.Lorem ipsum text here.Lorem
      ipsum text here.Lorem ipsum text here. Lorem ipsum text here.Lorem ipsum
      text here.Lorem ipsum text here.Lorem ipsum text here.Lorem ipsum text
      here. Lorem ipsum text here.Lorem ipsum text here.Lorem ipsum text
      here.Lorem ipsum text here.Lorem ipsum text here. Lorem ipsum text
      here.Lorem ipsum text here.Lorem ipsum text here.Lorem ipsum text
      here.Lorem ipsum text here.Lorem ipsum text
      here.Lorem ipsum text here.`;

const Template: Story<ITemplate & IImage> = args => {
  const {
    title,
    toggleCloseButton,
    textContent,
    showActions,
    toggleImagePlaceholder,
    imgSrc,
    objectFit,
    fullWidth
  } = args;
  const onClose = toggleCloseButton ? action('closed') : undefined;
  return (
    <Card onClose={onClose}>
      <Card.Header>{title}</Card.Header>
      {imgSrc && !toggleImagePlaceholder && (
        <Card.Image src={imgSrc} fullWidth={fullWidth} objectFit={objectFit} />
      )}
      {toggleImagePlaceholder && <Card.ImagePlaceholder fullWidth={fullWidth}  title="Placeholder"/>}
      <Card.Banner><Typography color="snow" size="large">A banner in the card</Typography></Card.Banner>
      <span className="bob-core-components-typography__regular--medium-1--coal">
        {textContent}
      </span>
      {showActions && (
        <Card.Actions>
          <Button variant="primary">First action</Button>
          <Button variant="tertiary">Second action</Button>
        </Card.Actions>
      )}
    </Card>
  );
};

export const Component = Template.bind({});
Component.args = {
  title: "Some title",
  toggleCloseButton: false,
  toggleImagePlaceholder: false,
  textContent: defaultText,
  showActions: false,
  fullWidth: false,
  objectFit: 'cover'
};