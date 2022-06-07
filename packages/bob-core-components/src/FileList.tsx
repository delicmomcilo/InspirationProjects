import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Image, Card, ButtonGrid } from './fileList/fileList.styles';
import { IProps, Preview } from "./fileList/types";
import Grid from "./Grid";
import Typography from "./Typography";

const FileList: React.FC<IProps> = ({
  preview = true,
  files = [],
  labelKey = "name",
  emptyMessage,
  imageMaxWidth,
  onRemove
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
        if (!file.type?.startsWith("image/")) return;
        const reader = new FileReader();
        reader.addEventListener(
          "load",
          () => {
            if (typeof reader.result === "string")
              updatePreviews({ [file.name]: reader.result });
          },
          false
        );
        if (file) {
          reader.readAsDataURL(file);
        }
      });
    }
  }, [files, preview]);
  return (
    <Grid container spacing={2}>
      {emptyMessage && files.length <= 0 && (
        <Grid item xs={12}>
          <Typography textAlign="center" size="medium" color="violet">
            {emptyMessage}
          </Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        {files.map(f => (
          <Grid
            container
            spacing={2}
            justifyContent={
              preview && previews[f.name] ? "center" : "space-between"
            }
            alignItems="center"
            direction={preview && previews[f.name]? "column" : "row"}
          >
            <Grid item>{f[labelKey]}</Grid>
            {previews[f.name] && (
              <Grid item>
                <Card>
                  <Image maxWidth={imageMaxWidth} src={previews[f.name]} />
                </Card>
              </Grid>
            )}

            <ButtonGrid hasImage={!!(preview && previews[f.name])}>
              <Button
                variant="icon"
                fitContent
                iconName="TrashOutlined"
                iconProps={{
                  round: true,
                  size: preview && previews[f.name] ? "large" : "medium"
                }}
                onClick={() => onRemove(f)}
              />
            </ButtonGrid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default FileList;
