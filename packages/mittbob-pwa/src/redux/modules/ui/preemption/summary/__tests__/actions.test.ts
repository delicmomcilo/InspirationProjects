import * as actions from '../actions';
import { TOGGLE_BINDING_CONTRACT_CHECKBOX, TOGGLE_RESET_SENIORITY_CHECKBOX } from '../constants';

describe('modules/ui/preepmtion/summary/actions', () => {
  it(`toggleBindingCheckbox`, () => {
    expect(actions.toggleBindingCheckbox()).toEqual({
      type: TOGGLE_BINDING_CONTRACT_CHECKBOX
    });
  });
  it(`toggleSeniorityCheckbox`, () => {
    expect(actions.toggleSeniorityCheckbox()).toEqual({
      type: TOGGLE_RESET_SENIORITY_CHECKBOX
    });
  });
});
