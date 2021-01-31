import { all } from 'redux-saga/effects';
import { COUNTER } from './Counter';

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([COUNTER()]);
};

export default rootSaga;
