import { SET_CATEGORIES, SET_FILTER } from './constants';

export const setCategories = payload => ({
  type: SET_CATEGORIES,
  payload,
});

export const setFilter = payload => ({
  type: SET_FILTER,
  payload,
});

export default {
  setCategories,
  setFilter,
};
