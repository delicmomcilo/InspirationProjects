import React from 'react';
import CheckList from '../CheckList';

export const Component: React.FC = () => {
  const [checked, setChecked] = React.useState({
    'Check Item 1': false,
    'Check Item 2': false,
    'Check Item 3': false,
  });

  const handleChange = (key: keyof typeof checked) => () => {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getKeys = () => Object.keys(checked) as Array<keyof typeof checked>;

  return (
    <CheckList
      title="Check List Title"
      checkboxes={getKeys().map(key => ({
        id: key,
        label: key,
        onChange: handleChange(key),
        value: `${checked[key]}`,
      }))}
    />
  );
};

export default {
  title: 'CheckList',
  parameters: {
    info: { inline: true },
  },
};