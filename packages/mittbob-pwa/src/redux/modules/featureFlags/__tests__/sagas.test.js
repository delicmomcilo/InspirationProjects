import { testSaga } from 'redux-saga-test-plan';
import { get as reqGet } from '../../../request';
import { get, getFailure, getSuccess } from '../actions';
import { getFeatureFlagsAsync } from '../sagas';
import { featureFlagsFunctionUrl } from '../../../../config/api';

describe('modules/featureFlags/sagas', () => {
  const error = new Error('I am an error');
  const mockFFs = ['flag1', 'flag2', 'flag3'];

  it.each([{ success: true }, { success: false }])(
    'should handle getFeatureFlagsAsync %o',
    ({ success }) => {
      const saga = testSaga(getFeatureFlagsAsync)
        .next()
        .put(get())
        .next()
        .call(reqGet, { url: featureFlagsFunctionUrl });

      if (success) saga.next({json: mockFFs, response: { ok: success}}).put(getSuccess(mockFFs));
      else saga.throw(error).put(getFailure({ error: error.toString() }));
      saga.next().isDone();
    },
  );
});
