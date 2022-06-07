import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFieldset,
  Legend,
  Controls,
  ErrorMessage,
} from './fieldset/fieldset.styles';

const Fieldset = ({ legend, children, error, ...rest }) => {
  const legendId = legend && btoa(legend);
  const childs = error
    ? React.Children.map(children, child =>
        React.cloneElement(child, { error }),
      )
    : children;
  return (
    <StyledFieldset aria-labelledby={legendId} {...rest}>
      {legend && <Legend id={legendId}>{legend}</Legend>}
      <Controls>{childs}</Controls>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledFieldset>
  );
};

Fieldset.propTypes = {
  legend: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
};

Fieldset.defaultProps = {
  legend: undefined,
  children: [],
  error: undefined,
};

export default Fieldset;
