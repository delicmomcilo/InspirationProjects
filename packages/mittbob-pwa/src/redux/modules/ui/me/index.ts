import { combineReducers } from 'redux';
import reducer from './reducer';
import profile from './profile/reducer';
import preferencesAuth0 from './preferencesAuth0/reducer';

export default combineReducers({
  reducer,
  profile,
  preferencesAuth0,
});
