import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, ShortcutButton, FileList, Card } from '@bob/core-components';
import {
  removeFile,
  setFiles,
} from '../../../redux/modules/ui/preemption/proof/actions';
import { RootState } from '../../../redux/rootState';
import { HiddenInput } from './proof.styles';

const Proof = () => {
  const uploadRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { files } = useSelector(
    ({
      ui: {
        preemption: { proof },
      },
    }: RootState) => proof,
  );
  const handleClick = (): void => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };
  const handleUpload = (): void => {
    if (uploadRef.current?.files) {
        dispatch(setFiles(Array.from(uploadRef.current.files)));
    }
  };
  const handleRemove = (file: File): void => {
    dispatch(removeFile(file.name));
  };
  return (
    <Grid item xs={12}>
      <Card title={t('Last opp finansieringsbevis')}>
        <Grid container spacing={2} justifyContent="center">
          <HiddenInput ref={uploadRef} onChange={handleUpload} />
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <ShortcutButton label={t('Last opp')} iconName="Binder" onClick={handleClick} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FileList files={files} onRemove={handleRemove} />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Proof;
