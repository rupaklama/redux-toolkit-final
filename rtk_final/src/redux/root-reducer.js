import { combineReducers } from 'redux';

import counterReducer from './counter/counterSlice';
import usersReducer from './users/usersSlice';

const reducers = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export default reducers;
