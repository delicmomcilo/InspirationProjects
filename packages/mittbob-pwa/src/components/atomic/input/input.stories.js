import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import Input, { PREDEFINED_MASK } from '../Input';

export default { title: 'Input' };

const Controlled = props => {
  const [val, setVal] = React.useState('');
  return (
    <Input
      value={val}
      onChange={e => {
        action('Updating')(e);
        action('Current value', val);
        setVal(e.currentTarget.value);
      }}
      {...props}
    />
  );
};

const create = ({ label = '', placeholder = '', disabled, mask, error, controlled } = {}) => () => {
  const labelText = text('Label', label);
  const placeholderText = text('Placeholder', placeholder);
  const errorText = text('Error', error);
  const isDisabled = boolean('Disabled', disabled);
  const isControlled = boolean('Controlled', controlled);
  const definedMask = select(
    'Mask',
    [].concat(Object.keys(PREDEFINED_MASK), 'NO_MASK'),
    mask || 'NO_MASK',
  );
  const Comp = isControlled ? Controlled : Input;
  return (
    <Comp
      label={labelText}
      placeholder={placeholderText}
      disabled={isDisabled}
      mask={definedMask !== 'NO_MASK' && PREDEFINED_MASK[definedMask]}
      error={errorText}
    />
  );
};

export const uncontrolled = create();
export const controlled = create({ controlled: true });
export const withLabel = create({ label: 'Label' });
export const withPlaceholder = create({ placeholder: 'Placeholder' });
export const withMask = create({ mask: 'dateOfBirth' });
export const withError = create({ error: 'This is an error' });
export const withLongError = create({
  error: 'This is an error a very long error with extra long text. Check it out!',
});
