import React, { useEffect, useRef, useState } from 'react';
import Button from 'src/components/atomic/Button';
import { List, Item, Label, Image, Card } from './fileList/fileList.styles';
import { IProps, Preview } from './fileList/types';

const FileList: React.FC<IProps> = ({
  preview = true,
  files = [],
  labelKey = 'name',
  emptyMessage,
  imageMaxWidth,
  onRemove,
}) => {
  const previewsRef = useRef({});
  const [previews, setPreviews] = useState<Preview>({});
  const updatePreviews = (updates: Preview): void => {
    previewsRef.current = { ...previewsRef.current, ...updates };
    setPreviews(previewsRef.current);
  };

  useEffect(() => {
    previewsRef.current = {};
    if (preview) {
      files.forEach(file => {
        if (!file.type?.startsWith('image/')) return;
        const reader = new FileReader();
        reader.addEventListener(
          'load',
          () => {
            if (typeof reader.result === 'string') updatePreviews({ [file.name]: reader.result });
          },
          false,
        );
        if (file) {
          reader.readAsDataURL(file);
        }
      });
    }
  }, [files, preview]);
  return (
    <List>
      {emptyMessage && files.length <= 0 && (
        <Item>
          <Label>{emptyMessage}</Label>
        </Item>
      )}
      {files.map(f => (
        <Item preview={!!(preview && previews[f.name])} key={`file_item_${f[labelKey]}`}>
          <Label>{f[labelKey]}</Label>
          {previews[f.name] && (
            <Card>
              <Image maxWidth={imageMaxWidth} src={previews[f.name]} />
            </Card>
          )}
          <Button
            variant="icon"
            fitContent
            iconName="TrashOutlined"
            iconProps={{
              round: true,
              size: preview && previews[f.name] ? 'large' : 'medium',
            }}
            onClick={() => onRemove(f)}
          />
        </Item>
      ))}
    </List>
  );
};

export default FileList;
