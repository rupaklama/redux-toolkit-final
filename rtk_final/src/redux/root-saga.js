import { all } from 'redux-saga/effects';
// 'all' effect is to resolve multiple promises at the same time
// & act only once when all promises get resolved like JavaScript's Promise.resolve()

// users sagas array
import usersSagas from './users/usersSagas';

// our Root Saga - top level Saga for all Fork Sagas
export default function* rootSaga() {
  // 'all' effect combinator
  // run multiple effects in parallel & wait for all of them to complete - similar to Promise.all
  yield all([
    // spread operator here to creates a new array from this 'usersSagas' array we imported
    // all the forked processes will be creating/running in parallel & waiting for all of them to be resolved
    ...usersSagas,
  ]);
}
