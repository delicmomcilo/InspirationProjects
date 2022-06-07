import React from 'react';
import PropTypes from 'prop-types';
import {
  Component,
  StyledLinkList,
  ImageContainer,
  StyledImage,
} from './imageCard/imageCard.styles';
import TextCard from './imageCard/TextCard';

const ImageCard = ({ variant, structure }) => {
  const { linkList, image, title, desc } = structure;
  return (
    <Component variant={variant}>
      {image && (
        <ImageContainer>
          <StyledImage name={image} />
        </ImageContainer>
      )}

      {title && desc ? (
        <TextCard structure={structure} title={title} />
      ) : (
        <StyledLinkList linkList={linkList} />
      )}
    </Component>
  );
};

ImageCard.propTypes = {
  structure: PropTypes.shape().isRequired,
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  linkList: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, url: PropTypes.string }),
    ),
  }),
  variant: PropTypes.string,
};

ImageCard.defaultProps = {
  variant: 'default',
  title: undefined,
  desc: undefined,
  image: undefined,
  linkList: undefined,
};

export default ImageCard;
