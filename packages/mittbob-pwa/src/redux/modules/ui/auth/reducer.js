import { SET_ERRORS } from './constants';

export const initialState = {
  errors: {},
};
export default (state = initialState, action) => {
  const { payload = {} } = action;
  const { errors } = payload;
  switch (action.type) {
    case SET_ERRORS:
      return { ...state, errors };
    default:
      return state;
  }
};
