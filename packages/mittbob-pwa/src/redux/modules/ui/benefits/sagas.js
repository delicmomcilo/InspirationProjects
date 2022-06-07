import { put, takeLatest } from 'redux-saga/effects';
import { GET_SUCCESS as UMBRACO_GET_SUCCESS } from '../../umbraco/constants';
import { setCategories } from './actions';

export function* getCategoriesFromBenefits({ payload }) {
  if (payload.umbracoProperty === 'memberBenefits') {
    const categories = payload.json._embedded.content.reduce((prev, next) => {
      next.props.category.value.forEach(category => {
        prev[category] = (prev[category] || 0) + 1; // eslint-disable-line no-param-reassign
      });
      return prev;
    }, {});
    yield put(setCategories(categories));
  }
}

export default function*() {
  yield takeLatest(UMBRACO_GET_SUCCESS, getCategoriesFromBenefits);
}
