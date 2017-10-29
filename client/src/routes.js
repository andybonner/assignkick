import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./components/app"
import Home from "./pages/Home";
import Main from "./pages/Main";
import NotFoundPage from './pages/not-found-page';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';  
import RequireAuth from './components/auth/require-auth';

export default (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/main" component={RequireAuth(Main)} />
      <Route path="*" component={NotFoundPage} />
    </div>
  </Router>
);