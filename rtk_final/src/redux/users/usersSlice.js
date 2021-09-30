import { createSlice } from '@reduxjs/toolkit';

const usersInitialState = {
  users: [],
  error: null,
};

// createSlice uses createReducer inside,
// so it's also safe to "mutate" state here as well
export const usersSlice = createSlice({
  // unique name for our 'slice' - piece of state
  name: 'users',

  initialState: usersInitialState,

  // The `reducers` field lets us define reducers and generate associated actions
  // setting up 'reducers' & 'actions' at the same time
  // Key names will be used to generate actions
  reducers: {
    getUsers: () => {},
    setUsers: (state, action) => {
      // note - Immer expects that you will either mutate the existing state, or
      // construct a new state value yourself and return it, but not both in the same function!
      state.users = action.payload;
    },
  },
});

// Action Creators
export const { getUsers, setUsers } = usersSlice.actions;

// Reducers
export default usersSlice.reducer;
