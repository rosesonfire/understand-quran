import { configureStore } from '@reduxjs/toolkit';
// import { createEpicMiddleware } from 'redux-observable';

import { /* epic, */ reducers } from './ducks';

// const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  // middleware: [
  //   epicMiddleware,
  // ],
  reducer: reducers,
});

// epicMiddleware.run(rootEpic);

export default store;
