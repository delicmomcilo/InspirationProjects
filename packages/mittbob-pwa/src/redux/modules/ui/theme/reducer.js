import { CHANGE_MODE, MODES } from './constants';

export const initialState = {
  mode: MODES.LIGHT,
};

export default (state = initialState, action) => {
  const { payload = {} } = action;
  const { mode } = payload;

  switch (action.type) {
    case CHANGE_MODE: {
      return { ...state, mode };
    }
    default:
      return state;
  }
};
