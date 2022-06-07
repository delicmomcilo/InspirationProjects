import reducer, { initialState } from '../reducer';
import { MODES, CHANGE_MODE } from '../constants';
import * as actions from '../actions';

describe('modules/ui/theme/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${CHANGE_MODE}`, () => {
    expect(reducer({}, actions.changeMode(MODES.DARK))).toEqual({
      ...initialState,
      mode: MODES.DARK,
    });
    expect(reducer({}, actions.changeMode(MODES.LIGHT))).toEqual({
      ...initialState,
      mode: MODES.LIGHT,
    });
  });
});
