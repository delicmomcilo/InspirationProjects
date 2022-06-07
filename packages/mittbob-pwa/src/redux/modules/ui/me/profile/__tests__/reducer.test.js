import reducer, { initialState } from '../reducer';
import { SET_ERRORS, SET_EDIT } from '../constants';
import { setErrors, setEdit } from '../actions';

describe('modules/ui/me/profile/reducer', () => {
  const errors = {
    one: { message: 'one' },
    two: { message: 'two' },
  };
  const edit = true;

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${SET_ERRORS}`, () => {
    expect(reducer(initialState, setErrors({ errors }))).toEqual({
      ...initialState,
      errors,
    });
  });

  it(`should handle ${SET_EDIT}`, () => {
    expect(reducer(initialState, setEdit({ edit }))).toEqual({
      ...initialState,
      edit,
    });
  });
});
