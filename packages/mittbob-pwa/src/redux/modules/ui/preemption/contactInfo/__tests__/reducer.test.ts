import reducer, { initialState } from '../reducer';
import * as constants from '../constants';

describe('modules/ui/preemption/contactInfo', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });

  it(`should handle ${constants.TOGGLE_FORM}`, () => {
    expect(reducer(initialState, { type: constants.TOGGLE_FORM })).toEqual({
      ...initialState,
      showExtraContactForm: true,
    });
  });

  it(`should handle ${constants.TOGGLE_TERMS_CHECKED}`, () => {
    expect(reducer(initialState, { type: constants.TOGGLE_TERMS_CHECKED })).toEqual({
      ...initialState,
      termsChecked: true,
    });
  });
  it(`should handle ${constants.SET_NAME}`, () => {
    expect(
      reducer(initialState, { type: constants.SET_NAME, payload: { name: 'testname' } }),
    ).toEqual({
      ...initialState,
      name: 'testname',
    });
  });
  it(`should handle ${constants.SET_MOBILE}`, () => {
    expect(
      reducer(initialState, { type: constants.SET_MOBILE, payload: { mobile: '123456789' } }),
    ).toEqual({
      ...initialState,
      mobile: '123456789',
    });
  });
  it(`should handle ${constants.SET_ERRORS}`, () => {
    const err = { name: { message: 'errormsg' } };
    expect(reducer(initialState, { type: constants.SET_ERRORS, payload: { errors: err } })).toEqual(
      {
        ...initialState,
        errors: err,
      },
    );
  });
});
