import React, { useState, useRef } from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import FileList from '../FileList';

export default {
  title: 'FileList',
  parameters: {
    info: { inline: true },
  },
};

export const Component: React.FC = () => {
  const emptyMessage = text('Empty Message', 'No files');
  const ref = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<Array<File>>([]);
  const handleChange = (): void => {
    if (ref.current?.files) {
      setFiles(Array.from(ref.current.files));
    }
  };

  return (
    <>
      <input ref={ref} type="file" multiple onChange={handleChange} />
      <FileList emptyMessage={emptyMessage} files={files} onRemove={action('Remove file')} />
    </>
  );
};
