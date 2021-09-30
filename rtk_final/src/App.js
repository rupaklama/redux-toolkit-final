import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectUsersList } from './redux/users/usersSelectors';
import { getUsers } from './redux/users/usersSlice';

function App() {
  const dispatch = useDispatch();

  const users = useSelector(selectUsersList);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      <h1>Redux Toolkit with Saga</h1>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
