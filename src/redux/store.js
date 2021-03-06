import thunkMiddleware from 'redux-thunk';

import {
  createStore,
  applyMiddleware,
} from 'redux';

import {
  composeWithDevTools,
} from 'redux-devtools-extension';

import reducers from './reducers';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

const storeLogger = () => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line
    console.log('STORE:', store.getState());
  }
};

store.subscribe(storeLogger);
storeLogger();

export default store;
