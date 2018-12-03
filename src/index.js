import React from 'react';
import { render } from 'react-dom';
import { createLogger } from 'redux-logger'
import { createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware } from 'redux';

import rootReducer from './reducers';
import Root from './components/Root'
import * as serviceWorker from './serviceWorker';
import './index.css';
import './styles/normalize.css'

const loggerMiddleware = createLogger();
const store = createStore(rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware));

render(<Root store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();