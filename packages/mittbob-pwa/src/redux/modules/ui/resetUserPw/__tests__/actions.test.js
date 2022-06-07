import { reset, errors } from '../actions';
import { ERRORS, RESET } from '../constants';

describe('modules/ui/resetUserPw/actions', () => {
  it('errors', () => {
    const err = {
      e: {
        message: 'Err',
      },
    };
    expect(errors(err)).toEqual({
      type: ERRORS,
      payload: { errors: err },
    });
  });
  it('reset', () => {
    expect(reset()).toEqual({
      type: RESET,
    });
  });
});
