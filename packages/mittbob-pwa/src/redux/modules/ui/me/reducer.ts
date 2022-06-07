import { TOGGLE_MODAL } from './constants';
import { State, Action } from './types/reducer.types';

export const initialState: State = {
  openModal: '',
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, openModal: action.payload.openModal };
    default:
      return state;
  }
};

export default reducer;
