import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import parse from 'html-react-parser';
import { RouteWithSubRoutes } from '../../router';
import { RouteShape } from '../../router/helpers';
import { UmbracoContent, UmbracoContentTitle } from './me.styles';
import {
  watchGetContactInfo,
  watchGetFAQ,
  watchGetMemberConditions,
  watchGetPreEmptionInfo,
  watchGetPrivacyDeclaration,
  watchGetTermsAndConcepts,
} from '../../redux/modules/umbraco/actions';

export const Routes = ({ routes }) => (
  <Switch>
    {routes.map(route => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
  </Switch>
);

export const getUmbracoContent = ({ _embedded: { content = [] } = {} }) =>
  content.reduce(
    (accumulator, { props: { title, text }, id }) => [
      ...accumulator,
      <UmbracoContentTitle key={`umbracoContentTitle_${id}`}>{title.value}</UmbracoContentTitle>,
      <UmbracoContent key={`umbracoContent_${id}`}>{parse(text.value)}</UmbracoContent>,
    ],
    [],
  );

export const getAllUmbracos = dispatch => {
  dispatch(watchGetContactInfo());
  dispatch(watchGetPrivacyDeclaration());
  dispatch(watchGetMemberConditions());
  dispatch(watchGetFAQ());
  dispatch(watchGetTermsAndConcepts());
  dispatch(watchGetPreEmptionInfo());
};

Routes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape(RouteShape)).isRequired,
};

export default Routes;
