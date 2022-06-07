import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import ModalDialog from '../ModalDialog';

export default { title: 'ModalDialog' };

const defaultContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque arcu non quam euismod varius. Morbi aliquet augue ipsum, id vehicula justo congue sed. Proin dignissim nibh a elementum porttitor. Donec venenatis lacus eget velit lobortis blandit. Vestibulum maximus pretium diam quis malesuada. Nunc porta feugiat dolor, in consequat mauris commodo tempor. Nulla porta egestas tortor, vitae sodales nisl elementum in. Ut feugiat eros eu bibendum varius.';
const defaultTitle = 'A title';
export const withNormal = () => {
  const modalContent = text('Text', defaultContent);
  const modalTitle = text('Title', defaultTitle);
  const open = boolean('Open', true);
  return (
    <ModalDialog title={modalTitle} open={open}>
      {modalContent}
    </ModalDialog>
  );
};
export const withClose = () => {
  const modalContent = text('Text', defaultContent);
  const modalTitle = text('Title', defaultTitle);
  const open = boolean('Open', true);
  return (
    <ModalDialog title={modalTitle} open={open} onClose={action('onClose')}>
      {modalContent}
    </ModalDialog>
  );
};

export const withIcon = () => {
  const modalContent = text('Text', defaultContent);
  const modalTitle = text('Title', defaultTitle);
  const icon = text('Icon', 'Heart');
  const open = boolean('Open', true);
  return (
    <ModalDialog title={modalTitle} open={open} onClose={action('onClose')} icon={icon}>
      {modalContent}
    </ModalDialog>
  );
};
