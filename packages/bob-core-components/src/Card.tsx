import React from "react";
import PropTypes from "prop-types";
import {
  Banner,
  Container,
  Actions,
  Header,
  CloseButton,
  ScrollableContent,
  Image
} from "./card/card.styles";
import { ExtraType, IProps } from "./card/types";
import { withDefaultTheme } from "./ThemeProvider";
import ImagePlaceholder from "./card/ImagePlaceholder";

const Card = ({ children, onClose, id, ...other }: IProps) => (
  <Container {...other}>
    {onClose && <CloseButton onClick={onClose} iconProps={{ size: "small" }} />}
    <ScrollableContent>{children}</ScrollableContent>
  </Container>
);
Card.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func
};

Card.defaultProps = {
  children: undefined,
  onClose: undefined
};

const WithTheme = withDefaultTheme(Card);
const WithExtra = WithTheme as typeof WithTheme & ExtraType;

WithExtra.Actions = Actions;
WithExtra.Header = Header;
WithExtra.Image = Image;
WithExtra.ImagePlaceholder = ImagePlaceholder;
WithExtra.Banner = Banner;

export default WithExtra;
