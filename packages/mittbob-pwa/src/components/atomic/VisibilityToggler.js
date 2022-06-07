import React from 'react';
import PropTypes from 'prop-types';
import StyledIcon from './visibilityToggler/visibilityToggler.styles';

const VisibiltyToggler = ({ onChange, visible, label }) => {
  return (
    <StyledIcon
      tabindex="0"
      role="checkbox"
      aria-checked={visible}
      name={visible ? 'EyeClosedOutlined' : 'EyeOutlined'}
      size="x-large"
      onClick={() => onChange(!visible)}
      aria-label={label}
      title={label}
    />
  );
};

VisibiltyToggler.propTypes = {
  onChange: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  label: PropTypes.string,
};

VisibiltyToggler.defaultProps = {
  label: undefined,
};

export default VisibiltyToggler;
