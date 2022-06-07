import { combineReducers } from 'redux';
import proof from './proof/reducer';
import shared from './shared/reducer';
import contactInfo from './contactInfo/reducer';
import bankId from './bankId/reducer';
import summary from './summary/reducer';

export default combineReducers({
  proof,
  shared,
  bankId,
  contactInfo,
  summary,
});
