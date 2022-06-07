import { setValidationErrors } from '../actions';
import * as constants from '../constants';

describe('modules/ui/auth/actions', () => {
  const errors = { username: 'Errormessage' };
  it('setValidationErrors', () => {
    expect(setValidationErrors({ errors })).toEqual({
      type: constants.SET_ERRORS,
      payload: { errors },
    });
  });
});
