import { watchGet } from '../actions';
import { umbraco } from '../../../../config';
import { UMBRACO_PROPERTIES } from '../constants';
import { UmbracoObject } from './sagas.types';

export type GetError = { error: string; umbracoProperty: UmbracoProperty; umbracoId: UmbracoId };

export type UmbracoProperty = typeof UMBRACO_PROPERTIES[keyof typeof UMBRACO_PROPERTIES];
export type UmbracoId = typeof umbraco[keyof typeof umbraco];

export type WatchGetPayload = {
  umbracoId: UmbracoId;
  umbracoProperty: UmbracoProperty;
  children?: boolean;
};

export type Success = {
  json: UmbracoObject;
  umbracoProperty: UmbracoProperty;
  umbracoId: UmbracoId;
};
export type WatchGetType = ReturnType<typeof watchGet>;
