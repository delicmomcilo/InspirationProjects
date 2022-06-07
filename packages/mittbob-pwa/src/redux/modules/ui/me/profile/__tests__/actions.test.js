import { SET_ERRORS, SET_EDIT } from '../constants';
import { setErrors, setEdit } from '../actions';

describe('modules/ui/me/profile', () => {
  it('should setErrors', () => {
    const errors = {
      one: { message: 'one' },
      two: { message: 'two' },
    };
    expect(setErrors({ errors })).toEqual({
      type: SET_ERRORS,
      payload: { errors },
    });
  });
  it('should setEdit', () => {
    const edit = true;
    expect(setEdit({ edit })).toEqual({
      type: SET_EDIT,
      payload: { edit },
    });
  });
});
