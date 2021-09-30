import axios from 'axios';
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { getUsers, setUsers } from './usersSlice';

function* workerGetUsers() {
  try {
    const fetchUsers = async () => {
      return await axios.get('https://jsonplaceholder.typicode.com/users');
    };
    const { data } = yield call(fetchUsers);

    yield put(setUsers(data));
  } catch (err) {
    console.error('Error fetching users', err);
  }
}
function* watchGetUsersRequest() {
  yield takeEvery(getUsers, workerGetUsers);
}

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
