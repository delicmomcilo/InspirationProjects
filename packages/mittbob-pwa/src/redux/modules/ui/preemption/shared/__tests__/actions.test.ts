import * as actions from '../actions';
import { SET_PREEMPTION } from '../constants';
import { Preemption } from '../../../../preemption/types';

describe('modules/ui/preepmtion/shared/actions', () => {
  it(`setPreemption`, () => {
    const preemption = { id: 'asd'} as unknown as Preemption;
    expect(actions.setPreemption(preemption)).toEqual({
      type: SET_PREEMPTION,
      payload: {
        preemption
      }
    });
  });
});
