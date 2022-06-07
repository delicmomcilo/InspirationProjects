import { Action, State } from './types/reducer';
import { Reducer } from 'redux';
import { SET_PREEMPTION } from './constants';

export const initialState: State = {
};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action?.type) {
    case SET_PREEMPTION:
      return { ...state, preemption: action.payload.preemption };
     default:
      return state;
  }
};

export default reducer;
