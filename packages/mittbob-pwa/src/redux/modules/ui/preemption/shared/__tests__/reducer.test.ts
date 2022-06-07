import reducer, { initialState } from '../reducer';
import { SET_PREEMPTION } from '../constants';
import { Preemption } from '../../../../preemption/types';

describe('modules/ui/preemption/shared', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });

  it(`should handle ${SET_PREEMPTION}`, () => {
    const preemption = ({ test: 'test' } as unknown) as Preemption;
    expect(reducer(initialState, { type: SET_PREEMPTION, payload: { preemption } })).toEqual({
      ...initialState,
      preemption,
    });
  });
});
