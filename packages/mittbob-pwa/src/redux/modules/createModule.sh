#!/bin/bash



while [ $# -gt 0 ]; do

  if [[ $1 == *"--"* ]]; then
      v="${1/--/}"
      declare $v="$2"
      # echo $1 $2 // Optional to see the parameter:value result
  fi

  shift
done

name=${name:?Name of module is required}
type=${type:-default}

if [[ $type == "ui" ]]; then
  mkdir -p ui/$name/__tests__/
  cd ui/$name
fi
if [[ $type == "default" ]]; then
  mkdir -p $name/__tests__/
  cd $name
  printf "export const INCREMENT_ASYNC = 'app/INCREMENT_ASYNC';" >> sagaConstants.js
  printf "import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { WATCH_GET } from './sagaConstants';
import { get, getSuccess, getFailure } from './actions';

// ...
export const get = async () => {
  if (Math.random() < 0.1) throw Error('An error has happened [TEST]'); // 10% chance
  return 'something';
};
// Our worker Saga: will perform the async increment task
export function* getAsync() {
  try {
    yield put(get());
    yield delay(1000);
    const response = yield call(get);
    yield put(getSuccess({ invoices: response }));
  } catch (error) {
    yield put(getFailure({ error }));
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* watchGetAsync() {
  yield takeLatest(WATCH_GET, getAsync);
}

" >> sagas.js
printf "import { testSaga } from 'redux-saga-test-plan';
import { getAsync, mock, get } from '../sagas';
import {
  get,
  getFailure,
  getSuccess,
} from '../actions';

describe('modules/name/sagas', () => {
  const data = ['a', 'b', 'c'];
  const error = new Error('I am an error');
  it.each([{ success: true }, { success: false }])(
    'should return the initial state %o',
    ({ success }) => {
      const saga = testSaga(getAsync)
        .next()
        .put(get())
        .next()
        .delay(1000)
        .next()
        .call(get);

      if (success) saga.next(mock).put(getSuccess({ data: mock }));
      else saga.throw(error).put(getFailure({ error }));
    },
  );
});
" >> __tests__/sagas.test.js

fi



printf "import reducer, { initialState } from '../reducer';
import { GET, GET_SUCCESS, GET_FAILURE } from '../constants';
import {
  get,
  getSuccess,
  getFailure,
} from '../actions';

describe('modules/invoices/reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(\`should handle \${GET}\`, () => {
    expect(reducer(initialState, get())).toEqual({
      ...initialState,
      loading: true,
    });
  });
});

" >> __tests__/actions.test.js
touch actions.js
touch constants.js
printf "import * as constants from './constants';

export const initialState = {
  app: 'state',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
" >> reducer.js
printf "import reducer from './reducer';\n\nexport default reducer;" >> index.js

