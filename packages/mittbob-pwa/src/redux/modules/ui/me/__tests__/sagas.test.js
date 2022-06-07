import { testSaga } from 'redux-saga-test-plan';
import sagas from '../sagas';

describe('modules/ui/me/sagas', () => {
  it('default', () => {
    testSaga(sagas)
      .next()
      .next()
      .isDone();
  });
});
