import * as constants from '../constants';
import * as actions from '../actions';
import { SET_ERRORS, SET_MOBILE, SET_NAME, TOGGLE_FORM, TOGGLE_TERMS_CHECKED } from '../constants';

describe('modules/ui/preepmtion/contactInfo/actions', () => {
  it(`toggleTerms`, () => {
    expect(actions.toggleTermsChecked()).toEqual({
      type: TOGGLE_TERMS_CHECKED,
    });
  });
  it(`setName`, () => {
    expect(actions.setName('name')).toEqual({
      type: SET_NAME,
      payload: {
        name: 'name',
      },
    });
  });
  it(`setMobile`, () => {
    expect(actions.setMobile('123456789')).toEqual({
      type: SET_MOBILE,
      payload: {
        mobile: '123456789',
      },
    });
  });
  it(`toggleForm`, () => {
    expect(actions.toggleForm()).toEqual({
      type: TOGGLE_FORM,
    });
  });
  it(`setErrors`, () => {
    const err = {
      name: { message: 'testerror' },
    };
    expect(actions.setErrors(err)).toEqual({
      type: SET_ERRORS,
      payload: { errors: err },
    });
  });
});
