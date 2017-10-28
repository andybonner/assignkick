// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
// pasted from tutorial:
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import routes from './routes';
import reducers from './reducers/index';
import { AUTH_USER } from './actions/types';
import RequireAuth from './components/auth/require-auth';
// end tutorial paste
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
    <BrowserRouter>
      <div>
        <Route path="/" component={Home}>
          <Route path="/main" component={RequireAuth(Main)} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
