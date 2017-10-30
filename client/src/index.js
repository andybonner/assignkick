// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
// pasted from tutorial:
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import routes from './routes';
import reducers from './reducers/index';
import { AUTH_USER } from './actions/types';
import RequireAuth from './components/auth/require-auth';
// end tutorial paste
import RequireUnAuth from './components/auth/require-unauth';
import Home from "./pages/Home";
import Main from "./pages/Main";
import NotFoundPage from './pages/not-found-page';
// import App from './App';
import { getCookie } from './util/cookie-utils';
import moment from "moment";
import "moment/locale/en-ca";
moment.locale('en-ca');

const history = createBrowserHistory()

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// check for token in cookie
const token = getCookie('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={RequireUnAuth(Home)} />
        <Route path="/main" component={RequireAuth(Main)} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
