import React from 'react';
import { NavLink, useLocation, matchPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledBreadcrumb,
  Component,
  Wrapper,
} from './breadCrumbs/breadCrumbs.styles';
import { Icon } from './atomic';

const buildTree = (siteMapArray, routes, parent) => {
  const searchForRoute = (tree, target) => {
    if (tree) {
      for (const child of tree) {
        if (child.id === target) {
          return child.path;
        }
        const retval = searchForRoute(child.routes, target);
        if (retval) return retval;
      }
    }
    return null;
  };

  for (const node of siteMapArray) {
    node.path = searchForRoute(routes, node.routeId);
    if (node.routes) {
      node.parent = parent ? { ...parent, routes: undefined } : undefined;
      buildTree(node.routes, routes, node);
    }
  }
  return null;
};

const findRouteInSitemapByPath = (route, path) => {
  const match = matchPath(path, { path: route.path, exact: true });

  if (match && match.isExact) {
    return route;
  }

  if (route.routes !== undefined) {
    for (const rt of route.routes) {
      const retval = findRouteInSitemapByPath(rt, path);
      if (retval) return retval;
    }
  }
  return null;
};

const BreadCrumbs = ({ routes, siteMap }) => {
  const breadPath = [];
  const location = useLocation();

  buildTree(siteMap, routes);

  siteMap.forEach(siteMapItem => {
    let foundRoute = findRouteInSitemapByPath(siteMapItem, location.pathname);

    if (foundRoute) {
      foundRoute.current = true;
      while (foundRoute.parent) {
        breadPath.push(foundRoute);
        if (foundRoute.parent) foundRoute = foundRoute.parent;
        foundRoute.current = false;
        if (!foundRoute.parent) {
          breadPath.push(foundRoute);
          return;
        }
      }
    }
  });

  return (
    <Wrapper>
      <Component>
        {breadPath.reverse().map((crumb, idx) => (
          <React.Fragment key={crumb.routeId}>
            <StyledBreadcrumb>
              {!crumb.current && (
                <NavLink to={crumb.path}>{crumb.title}</NavLink>
              )}
              {crumb.current && crumb.title}
            </StyledBreadcrumb>
            {idx + 1 < breadPath.length && <Icon name="arrowMediumRight" />}
          </React.Fragment>
        ))}
      </Component>
    </Wrapper>
  );
};

BreadCrumbs.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  siteMap: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
export default BreadCrumbs;
