import { put, takeLatest } from 'redux-saga/effects';

const INCREAMENT = 'INCREAMENT';
const DECREAMENT = 'DECREAMENT';

export const COUNTER = function* fetchCount() {
  yield takeLatest('counter', function* counter(action) {
    if (action.type === INCREAMENT) {
      yield put({ type: INCREAMENT });
    } else {
      yield put({ type: DECREAMENT });
    }
  });
};
