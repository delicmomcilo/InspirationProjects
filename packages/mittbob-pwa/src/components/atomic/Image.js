import React from 'react';
import PropTypes from 'prop-types';
import images from './image/index';

const Image = ({ name, variant, ...rest }) => {
  const src = images[name];
  return <img {...rest} src={src} alt="card illustration" />;
};

Image.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

Image.defaultProps = {
  variant: 'default',
};

export default Image;
