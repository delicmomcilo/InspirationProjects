import * as constants from './constants';
import { WATCH_GET, WATCH_UPDATE, WATCH_UPDATE_COMMUNICATION_PREFERENCES } from './sagaConstants';
import * as types from './types/actions.types';
import { Configuration, Person } from './types';

export const getSeniority = (nameId?: string) =>
  ({
    type: constants.GET_SENIORITY,
    payload: { id: nameId}
  } as const);

export const getSenioritySuccess = ({ seniority }: types.Seniority) =>
  ({
    type: constants.GET_SENIORITY_SUCCESS,
    payload: { seniority },
  } as const);

export const getSeniorityFailure = ({ error }: types.Error) =>
  ({
    type: constants.GET_SENIORITY_FAILURE,
    payload: { error },
  } as const);

export const patchPerson = () =>
  ({
    type: constants.PATCH_PERSON,
  } as const);

export const patchPersonSuccess = () =>
  ({
    type: constants.PATCH_PERSON_SUCCESS,
  } as const);

export const patchPersonFailure = ({ error }: types.Error) =>
  ({
    type: constants.PATCH_PERSON_FAILURE,
    payload: { error },
  } as const);

export const getPerson = () =>
  ({
    type: constants.GET,
  } as const);

export const getPersonSuccess = (person: Person) =>
  ({
    type: constants.GET_SUCCESS,
    payload: { person },
  } as const);

export const getPersonFailure = ({ error }: types.Error) =>
  ({
    type: constants.GET_FAILURE,
    payload: { error },
  } as const);

export const getConfiguration = () =>
  ({
    type: constants.GET_CONFIGURATION,
  } as const);

export const getConfigurationSuccess = ({ configuration }: types.Configuration) =>
  ({
    type: constants.GET_CONFIGURATION_SUCCESS,
    payload: { configuration },
  } as const);

export const getConfigurationFailure = ({ error }: types.Error) =>
  ({
    type: constants.GET_CONFIGURATION_FAILURE,
    payload: { error },
  } as const);

export const putConfiguration = ({ configuration }: types.Configuration) =>
  ({
    type: constants.PUT_CONFIGURATION,
    payload: { configuration },
  } as const);

export const putConfigurationSuccess = ({ configuration }: types.Configuration) =>
  ({
    type: constants.PUT_CONFIGURATION_SUCCESS,
    payload: { configuration },
  } as const);

export const putConfigurationFailure = ({ error }: types.Error) =>
  ({
    type: constants.PUT_CONFIGURATION_FAILURE,
    payload: { error },
  } as const);

export const patchConfiguration = ({ op, path, value }: types.Patch) =>
  ({
    type: constants.PATCH_CONFIGURATION,
    payload: [{ op, path, value }],
  } as const);

export const patchConfigurationSuccess = ({ configuration }: types.Configuration) =>
  ({
    type: constants.PATCH_CONFIGURATION_SUCCESS,
    payload: { configuration },
  } as const);

export const patchConfigurationFailure = ({ error }: types.Error) =>
  ({
    type: constants.PATCH_CONFIGURATION_FAILURE,
    payload: { error },
  } as const);

export const addFavoritePreemption = ({ id }: types.Id): ReturnType<typeof patchConfiguration> =>
  patchConfiguration({
    op: 'add',
    path: `/favoritePreemptions/${id}`,
    value: true,
  });

export const removeFavoritePreemption = ({ id }: types.Id): ReturnType<typeof patchConfiguration> =>
  patchConfiguration({
    op: 'remove',
    path: `/favoritePreemptions/${id}`,
  });

export const setSavedSearch = ({ search }: types.Search): ReturnType<typeof patchConfiguration> =>
  patchConfiguration({
    op: 'add',
    path: '/savedSearch',
    value: search,
  });


export const watchGetPerson = () => ({
  type: WATCH_GET
} as const);

export const watchUpdatePerson = (payload: Partial<Person>) => ({
  type: WATCH_UPDATE,
  payload
} as const)

export const watchUpdateCommunicationPreferences = (payload: Configuration['communicationPreferences']) => ({
  type:WATCH_UPDATE_COMMUNICATION_PREFERENCES,
  payload
} as const)