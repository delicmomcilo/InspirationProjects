import React from "react";
import { IProps } from "./imagePlaceholder/imagePlaceholder.types";
import { Container } from "./imagePlaceholder/imagePlaceholder.styles";
import Typography from "../Typography";

const ImagePlaceholder = (props: IProps) => {
  const { title, fullWidth, height, className } = props;
  return (
    <Container fullWidth={fullWidth} height={height} className={className}>
      <Typography size="x-large" color="light-grey">
        {title}
      </Typography>
    </Container>
  );
};

export default ImagePlaceholder;
