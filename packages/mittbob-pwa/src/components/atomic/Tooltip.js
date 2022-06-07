import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const Tooltip = ({ children, tip, show, ...other }) => {
  const count = React.Children.count(children);
  const targetRef = useRef();
  useEffect(() => {
    if (show !== undefined) {
      if (show) {
        ReactTooltip.show(targetRef.current);
      } else {
        ReactTooltip.hide(targetRef.current);
      }
    }
  }, [show]);
  if (count <= 0) {
    // eslint-disable-next-line
    console.error(
      '[Tooltip] Children is missing, nothing to render tooltip for.',
    );
    return null;
  }
  if (count > 1) {
    // eslint-disable-next-line
    console.error(
      '[Tooltip] Children is greater than 1. Currently not supported.',
    );
    return null;
  }
  const getTip = () => {
    if (show !== undefined) {
      return show ? tip : '';
    }
    return tip;
  };

  const getTooltipProps = () => {
    const props = { effect: 'solid' };
    if (show !== undefined) props.event = 'none';
    return props;
  };

  return (
    <>
      {React.cloneElement(children, { 'data-tip': getTip(), ref: targetRef })}
      <ReactTooltip {...getTooltipProps()} {...other} />
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  tip: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
  show: undefined,
};

export default Tooltip;
