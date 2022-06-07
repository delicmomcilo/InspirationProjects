import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import ShortcutButton from '../ShortcutButton';
import icons from '../icon/icons';
import Icon from '../Icon';

export default { title: 'ShortcutButton' };

export const withIcon = () => {
  const btnText = text('Label', 'Hello button');
  const iconName = select('Icon', Object.keys(icons), Object.keys(icons)[0]);
  const lowerRightIcon = select('Lower Icon', [null].concat(Object.keys(icons)), null);
  const greenDot = boolean('Green dot', false);
  const disabled = boolean('Disabled', false);
  return (
    <ShortcutButton
      label={btnText}
      disabled={disabled}
      showGreenDot={greenDot}
      onClick={action('click')}
      iconName={iconName}
      lowerRightIcon={lowerRightIcon && <Icon name={lowerRightIcon} />}
    />
  );
};
