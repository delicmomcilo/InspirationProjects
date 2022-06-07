import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Card from '../Card';
import Button from '../Button';

export default {
  title: 'Card',
};

const defaultText = `Lorem ipsum text here.Lorem ipsum text here.Lorem ipsum text here.Lorem
      ipsum text here.Lorem ipsum text here. Lorem ipsum text here.Lorem ipsum
      text here.Lorem ipsum text here.Lorem ipsum text here.Lorem ipsum text
      here. Lorem ipsum text here.Lorem ipsum text here.Lorem ipsum text
      here.Lorem ipsum text here.Lorem ipsum text here. Lorem ipsum text
      here.Lorem ipsum text here.Lorem ipsum text here.Lorem ipsum text
      here.Lorem ipsum text here.`;

const defaultHeader = 'I am a header for this card!';

export const withEmptyContent = () => <Card />;
export const withText = () => {
  const textContent = text('Text', defaultText);
  const headerContent = text('Header', defaultHeader);
  return (
    <Card>
      <Card.Header>{headerContent}</Card.Header>
      <span className="bob-core-components-typography__regular--medium-1--coal">
        {textContent}
      </span>
    </Card>
  );
};
export const withActions = () => {
  const textContent = text('Text', defaultText);
  const headerContent = text('Header', defaultHeader);
  return (
    <Card>
      <Card.Header>{headerContent}</Card.Header>
      <span className="bob-core-components-typography__regular--medium-1--coal">
        {textContent}
      </span>
      <Card.Actions>
        <Button variant="primary">First action</Button>
        <Button variant="tertiary">Second action</Button>
      </Card.Actions>
    </Card>
  );
};

export const withCloseButton = () => {
  const textContent = text('Text', defaultText);
  const headerContent = text('Header', defaultHeader);
  return (
    <Card onClose={action('Closed')}>
      <Card.Header>{headerContent}</Card.Header>
      <span className="bob-core-components-typography__regular--medium-1--coal">
        {textContent}
      </span>
      <Card.Actions>
        <Button variant="primary">First action</Button>
        <Button variant="tertiary">Second action</Button>
      </Card.Actions>
    </Card>
  );
};
