/* eslint-disable react-hooks/exhaustive-deps */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//If you want to use logger, please uncomment logger lines.
import logger from 'redux-logger';
import reducers from './reducerCombiner';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, reducers);

let store: any;
// without logger
if (process.env.NODE_ENV !== 'production') {
  store = createStore(persistedReducer, applyMiddleware(logger, sagaMiddleware));
}
// with logger
else {
  store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
}

const persistor = persistStore(store);

store.subscribe(() => {});

sagaMiddleware.run(sagas);

// Hot reloading fix for redux
if ((module as any).hot) {
  (module as any).hot.accept(() => {
    store.replaceReducer(reducers as any);
  });
}

export { store, persistor };
