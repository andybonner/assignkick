// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// pasted from tutorial:
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import routes from './routes';
import reducers from './reducers/index';
import { AUTH_USER } from './actions/types';
// end tutorial paste
// import App from './App';
import cookie from 'react-cookie';
import moment from "moment";
import "moment/locale/en-ca";
moment.locale('en-ca');

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// check for token in cookie
const token = cookie.load('token');

if (token) {  
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter routes={routes} />
  </Provider>,
  document.getElementById('root')
);
