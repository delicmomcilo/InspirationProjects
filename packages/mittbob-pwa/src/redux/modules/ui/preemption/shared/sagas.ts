import { put, all, select, takeLatest, take } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import PATHS from '../../../../../router/paths';
import { INIT } from './constants';
import {
  GET_PREEMPTION_SUCCESS,
  GET_PREEMPTION_FAILURE,
  POST_INTEREST_SUCCESS,
} from '../../../preemption/constants';
import selectors from '../../../preemption/selectors';
import { getPreemption } from '../../../preemption/actions';
import { reset, setPreemption } from './actions';

export function* initShared(args: AnyAction) {
  const { preemptionId } = args.payload;
  const preemption = yield select(selectors.preemption(preemptionId));
  yield put(reset())
  if (!preemption) {
    yield put(getPreemption({id: preemptionId}));
    const task = yield take([GET_PREEMPTION_SUCCESS, GET_PREEMPTION_FAILURE]);
    if (task.type === GET_PREEMPTION_FAILURE) {
    } else {
      yield put(setPreemption(task.payload.preemptions[preemptionId]))
    }
  } else {
    yield put(setPreemption(preemption))

  }
}

export function* postInterestSuccess(args: AnyAction) {
  yield put(push(PATHS.PREEMPTION_SUCCESS.replace(':id', args.payload?.id)));
}

export default function*() {
  yield all([
    takeLatest(POST_INTEREST_SUCCESS, postInterestSuccess),
    takeLatest(INIT, initShared)

  ])

}
