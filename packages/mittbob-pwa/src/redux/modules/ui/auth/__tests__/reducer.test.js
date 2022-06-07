import reducer, { initialState } from '../reducer';
import { setValidationErrors } from '../actions';
import * as constants from '../constants';

describe('modules/ui/auth/reducer', () => {
  const errors = new Error('Test error');
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${constants.SET_ERRORS}`, () => {
    expect(reducer(initialState, setValidationErrors({ errors }))).toEqual({
      ...initialState,
      errors,
    });
  });
});
