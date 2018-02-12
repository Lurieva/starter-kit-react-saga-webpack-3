import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore(initialState = {}) {
  let devTools = next => next;
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware,
  ];

  if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      devTools
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
