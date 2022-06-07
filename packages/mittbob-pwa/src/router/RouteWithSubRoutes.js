import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useBrowserThemeColor } from '../helpers';
import PATHS from './paths';

export default route => {
  const isAuthenticatedAuth0 = useSelector(store => store.auth0.isAuthenticated);
  useBrowserThemeColor(route.browserThemeColor);
  const render = props => {
    if (!isAuthenticatedAuth0 && route.protected) {
      return <Redirect to={PATHS.HOME} />;
    }

    return (
      <>
        <route.component
          {...props}
          // pass the sub-routes down to keep nesting
          routes={route.routes}
        />
      </>
    );
  };
  return <Route path={route.path} render={render} />;
};
