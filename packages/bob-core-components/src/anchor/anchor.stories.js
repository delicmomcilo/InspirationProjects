import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Anchor from '../Anchor';

export default { title: 'Anchor' };

export const primary = () => {
  const link = text('Text', '/');
  // const linkNotVisited = text('Text', Math.random());
  return (
    <div>
      <p>
        <Anchor
          href={Math.random()}
          variant="primary"
          onClick={action('click')}
        >
          This is an unvisited link
        </Anchor>
      </p>

      <p>
        <Anchor href={link} variant="primary" onClick={action('click')}>
          This is a visited link
        </Anchor>
      </p>
    </div>
  );
};
