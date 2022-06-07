import { SET_CATEGORIES, SET_FILTER } from './constants';

export const initialState = {
  loading: false,
  errors: {},
  categories: {},
  filter: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
