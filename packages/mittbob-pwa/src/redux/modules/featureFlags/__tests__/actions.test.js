import {
  get,
  getFailure,
  getSuccess,
  watchGet,
} from '../actions';
import * as constants from '../constants';
import * as sagaConstants from '../sagaConstants';

describe('modules/featureFlags/actions', () => {
  const error = new Error('Test error');
  const flags = ['flag', 'flag2', 'flag3'];
  it('get', () => {
    expect(get()).toEqual({
      type: constants.GET,
    });
  });
  it('getFailure', () => {
    expect(getFailure({ error: error.toString() })).toEqual({
      type: constants.GET_FAILURE,
      payload: { error: error.toString() },
    });
  });
  it('getSuccess', () => {
    expect(getSuccess(flags)).toEqual({
      type: constants.GET_SUCCESS,
      payload: { featureFlags: flags },
    });
  });

  it('watchGet', () => {
    expect(watchGet()).toEqual({
      type: sagaConstants.WATCH_GET,
    });
  });
});
