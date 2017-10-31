import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import { AUTH_USER } from './actions/types';
import RequireAuth from './components/auth/require-auth';
import RequireUnAuth from './components/auth/require-unauth';
import Home from "./pages/Home";
import Main from "./pages/Main";
import NotFoundPage from './pages/not-found-page';
import { getCookie } from './util/cookie-utils';
import jwt_decode from 'jwt-decode';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

// css
import './index.css';

const history = createBrowserHistory();
console.log(history);

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// check for token in cookie
const token = getCookie('token');

if (token) {
  const userInfo = jwt_decode(token);
  store.dispatch({
    type: AUTH_USER,
    user: userInfo
   });
}

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={RequireUnAuth(Home)} />
          <Route path="/main" component={RequireAuth(Main)} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  </LocaleProvider>,
  document.getElementById('root')
);