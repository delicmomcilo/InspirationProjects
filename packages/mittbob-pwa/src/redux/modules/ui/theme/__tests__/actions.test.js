import { changeMode } from '../actions';
import { CHANGE_MODE, MODES } from '../constants';

describe('modules/ui/theme/actions', () => {
  it('changeMode', () => {
    expect(changeMode(MODES.DARK)).toEqual({
      type: CHANGE_MODE,
      payload: {
        mode: MODES.DARK,
      },
    });
  });
});
