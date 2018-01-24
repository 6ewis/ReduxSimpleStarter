import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import App from './container/app';
import reducers from './reducers';
import rootSaga from './actions';

const sagaMiddleware = createSagaMiddleware();
// const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'),
);
