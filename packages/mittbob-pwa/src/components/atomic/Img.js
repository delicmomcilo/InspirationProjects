import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import { Container } from './img/img.styles';

const Img = ({ width, height, maxWidth, maxHeight, ...other }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Container maxWidth={maxWidth} maxHeight={maxHeight} loaded={loaded}>
      <img
        alt=""
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        {...other}
      />
      {!loaded && (
        <div>
          <Skeleton width="100%" height="100%" />
        </div>
      )}
    </Container>
  );
};

Img.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
Img.defaultProps = {
  width: undefined,
  height: undefined,
  maxHeight: undefined,
  maxWidth: undefined,
};

export default Img;
