// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// pasted from tutorial:
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import routes from './routes';
// import reducers from './reducers/index';
// import { AUTH_USER } from './actions/types';
// end tutorial paste
import App from './App';
import moment from "moment";
import "moment/locale/en-ca";
moment.locale('en-ca');

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
