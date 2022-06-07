import reducer, { initialState } from '../reducer';
import { TOGGLE_BINDING_CONTRACT_CHECKBOX, TOGGLE_RESET_SENIORITY_CHECKBOX } from '../constants';

describe('modules/ui/preemption/summary', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });

  it(`should handle ${TOGGLE_RESET_SENIORITY_CHECKBOX}`, () => {
    expect(reducer(initialState, { type: TOGGLE_RESET_SENIORITY_CHECKBOX })).toEqual({
      ...initialState,
      seniorityChecked: true,
    });
  });
  it(`should handle ${TOGGLE_BINDING_CONTRACT_CHECKBOX}`, () => {
    expect(reducer(initialState, { type: TOGGLE_BINDING_CONTRACT_CHECKBOX })).toEqual({
      ...initialState,
      bindingContractChecked: true,
    });
  });
});
