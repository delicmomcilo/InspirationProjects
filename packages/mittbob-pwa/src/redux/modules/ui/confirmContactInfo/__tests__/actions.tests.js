import { SHOW, INIT_FAILURE, ABORT } from '../constants';
import { show, initFailure, abort } from '../actions';

describe('modules/ui/confirmContactInfo/actions', () => {
  it(`should show`, () => {
    expect(show(true)).toEqual({
      type: SHOW,
      payload: { show: true },
    });
  });

  it(`should initFailure`, () => {
    const error = "some error";
    expect(initFailure(error)).toEqual({
      type: INIT_FAILURE,
      payload: { error },
    });
  });

  it(`should abort`, () => {
    expect(abort()).toEqual({
      type: ABORT,
    });
  });
});