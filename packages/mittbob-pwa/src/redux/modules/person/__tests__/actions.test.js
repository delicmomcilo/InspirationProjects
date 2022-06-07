import * as actions from '../actions';
import * as constants from '../constants';

describe('modules/person/actions', () => {
  it('getSeniority', () => {
    const seniority = { seniorityDate: undefined, seniorityDays: 0 };
    const error = 'getSeniorityError';
    expect(actions.getSeniority()).toEqual({
      type: constants.GET_SENIORITY,
      payload: {
        id: undefined
      }
    });
    expect(actions.getSenioritySuccess({ seniority })).toEqual({
      type: constants.GET_SENIORITY_SUCCESS,
      payload: { seniority },
    });
    expect(actions.getSeniorityFailure({ error })).toEqual({
      type: constants.GET_SENIORITY_FAILURE,
      payload: { error },
    });
  });

  it('getPerson', () => {
    const person = { name: 'test' };
    const error = 'getPersonError';
    expect(actions.getPerson()).toEqual({
      type: constants.GET,
    });
    expect(actions.getPersonSuccess(person)).toEqual({
      type: constants.GET_SUCCESS,
      payload: { person },
    });
    expect(actions.getPersonFailure({ error })).toEqual({
      type: constants.GET_FAILURE,
      payload: { error },
    });
  });

  it('getConfiguration', () => {
    const configuration = {
      frontPageWidgets: ['string'],
      favoritePreemptions: ['string'],
      savedSearch: 'string',
    };
    const error = 'getConfigurationError';
    expect(actions.getConfiguration()).toEqual({
      type: constants.GET_CONFIGURATION,
    });
    expect(actions.getConfigurationSuccess({ configuration })).toEqual({
      type: constants.GET_CONFIGURATION_SUCCESS,
      payload: { configuration },
    });
    expect(actions.getConfigurationFailure({ error })).toEqual({
      type: constants.GET_CONFIGURATION_FAILURE,
      payload: { error },
    });
  });

  it('postConfiguration', () => {
    const configuration = {
      frontPageWidgets: ['string'],
      favoritePreemptions: ['string'],
      savedSearch: 'string',
    };
    const error = 'postConfigurationError';
    expect(actions.putConfiguration({ configuration })).toEqual({
      type: constants.PUT_CONFIGURATION,
      payload: { configuration },
    });
    expect(actions.putConfigurationSuccess({ configuration })).toEqual({
      type: constants.PUT_CONFIGURATION_SUCCESS,
      payload: { configuration },
    });
    expect(actions.putConfigurationFailure({ error })).toEqual({
      type: constants.PUT_CONFIGURATION_FAILURE,
      payload: { error },
    });
  });

  it('patchConfiguration', () => {
    const id = 'p1';
    const patchData = {
      op: 'add',
      path: `/variableName/${id}`,
      value: true,
    };
    const configuration = {
      frontPageWidgets: ['string'],
      favoritePreemptions: ['string'],
      savedSearch: 'string',
    };
    const error = 'patchConfigurationError';
    expect(actions.patchConfiguration(patchData)).toEqual({
      type: constants.PATCH_CONFIGURATION,
      payload: [patchData],
    });
    expect(actions.patchConfigurationSuccess({ configuration })).toEqual({
      type: constants.PATCH_CONFIGURATION_SUCCESS,
      payload: { configuration },
    });
    expect(actions.patchConfigurationFailure({ error })).toEqual({
      type: constants.PATCH_CONFIGURATION_FAILURE,
      payload: { error },
    });

    expect(actions.addFavoritePreemption({ id })).toEqual(
      actions.patchConfiguration({
        op: 'add',
        path: `/favoritePreemptions/${id}`,
        value: true,
      }),
    );
    expect(actions.removeFavoritePreemption({ id })).toEqual(
      actions.patchConfiguration({
        op: 'remove',
        path: `/favoritePreemptions/${id}`,
      }),
    );
    expect(actions.setSavedSearch({ search: 'value' })).toEqual(
      actions.patchConfiguration({
        op: 'add',
        path: '/savedSearch',
        value: 'value',
      }),
    );
  });
});
