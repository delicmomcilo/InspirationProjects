import reducer, { initialState } from '../reducer';
import * as actions from '../actions';

describe('modules/person/reducer', () => {
  it('initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('getSeniority', () => {
    const seniority = { seniorityDate: undefined, seniorityDays: 0 };
    const error = 'getSeniorityError';
    expect(reducer(undefined, actions.getSeniority())).toEqual({
      ...initialState,
      loading: true,
    });
    expect(reducer(undefined, actions.getSenioritySuccess({ seniority }))).toEqual({
      ...initialState,
      loading: false,
      seniority,
    });
    expect(reducer(undefined, actions.getSeniorityFailure({ error }))).toEqual({
      ...initialState,
      loading: false,
      seniorityError: error,
    });
  });

  it('getPerson', () => {
    const person = { name: 'test' };
    const error = 'getPersonError';
    expect(reducer(undefined, actions.getPerson())).toEqual({
      ...initialState,
      loading: true,
    });
    expect(reducer(undefined, actions.getPersonSuccess(person ))).toEqual({
      ...initialState,
      loading: false,
      person,
    });
    expect(reducer(undefined, actions.getPersonFailure({ error }))).toEqual({
      ...initialState,
      loading: false,
      personError: error,
    });
  });

  it('getConfiguration', () => {
    const configuration = {
      username: 'vghct9tm-plce-h6nz-40o5-8ytepv3510ua',
      frontpageWidgets: [],
      favoritePreemptions: [],
      savedSearch: null,
      infoPrompts: null,
    };
    const error = 'getConfigurationError';
    expect(reducer(undefined, actions.getConfiguration())).toEqual({
      ...initialState,
      loading: true,
    });
    expect(reducer(undefined, actions.getConfigurationSuccess({ configuration }))).toEqual({
      ...initialState,
      loading: false,
      configuration,
    });
    expect(reducer(undefined, actions.getConfigurationFailure({ error }))).toEqual({
      ...initialState,
      loading: false,
      configurationError: error,
    });
  });
});
