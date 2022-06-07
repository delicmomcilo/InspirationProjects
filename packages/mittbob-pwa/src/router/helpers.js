import PropTypes from 'prop-types';

export const RouteShape = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};
RouteShape.routes = PropTypes.arrayOf(PropTypes.shape(RouteShape));

export default RouteShape;
