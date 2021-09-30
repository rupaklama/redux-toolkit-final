import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducers from './root-reducer';

// root saga
import startRootSaga from './root-saga';

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// configureStore - to create Redux Store
const store = configureStore({
  reducer: reducers,
  // middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  middleware: getDefaultMiddleware => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

// NOTE: we are going to run & add in all our Sagas
sagaMiddleware.run(startRootSaga);

export default store;
