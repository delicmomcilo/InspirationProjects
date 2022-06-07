import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import Icon from '../Icon';
import { sizes } from './icon.styles';
import icons from './icons';
import { IconNames, IconSizes } from './types';


export default {
  title: 'Icon',
  parameters: {
    info: { inline: true, source: false },
  },
};

export const all: React.FC = () => {
  const round = boolean('Round', false);
  const size = select('Size', Object.keys(sizes), 'large') as IconSizes;
  const content = (Object.keys(icons) as Array<IconNames>).map(k => <Icon name={k} round={round} size={size} />);
  return <div>{content}</div>;
};

