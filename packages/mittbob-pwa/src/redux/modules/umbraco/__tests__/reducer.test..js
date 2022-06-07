import reducer, { initialState } from '../reducer';
import { get, getFailure, getSuccess } from '../actions';
import {
  GET_FAILURE,
  GET_SUCCESS,
  GET,
  UMBRACO_PROPERTIES,
} from '../constants';
import { umbraco } from '../../../../config';

describe('modules/umbraco/reducer', () => {
  const error = new Error('Test error');
  const umbracoJson = {
    some: 'json',
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${GET}`, () => {
    expect(reducer(initialState, get())).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it(`should handle ${GET_FAILURE}`, () => {
    expect(
      reducer(
        initialState,
        getFailure({
          error,
          umbracoProperty: UMBRACO_PROPERTIES.CONTACT_INFO,
          umbracoId: umbraco.contactInfoId,
        }),
      ),
    ).toEqual({
      ...initialState,
      loading: false,
      errors: {
        [UMBRACO_PROPERTIES.CONTACT_INFO]: error,
      },
    });
  });

  it(`should handle ${GET_SUCCESS}`, () => {
    expect(
      reducer(
        initialState,
        getSuccess({
          json: umbracoJson,
          umbracoProperty: UMBRACO_PROPERTIES.CONTACT_INFO,
          umbracoId: umbraco.contactInfoId,
        }),
      ),
    ).toEqual({
      ...initialState,
      loading: false,
      [UMBRACO_PROPERTIES.CONTACT_INFO]: umbracoJson,
    });
  });
});
