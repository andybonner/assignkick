import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from "./pages/Home";
import Main from "./pages/Main";
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

// import NotFoundPage from './components/pages/not-found-page';

// import HomePage from './components/pages/home-page';  
// import Register from './components/auth/register';  
// import Login from './components/auth/login';  
// import Dashboard from './components/dashboard';  
import RequireAuth from './components/auth/require-auth';

export default (
  <LocaleProvider locale={enUs}>
    <Route path="/" component={Home} />
    <Route path="/main" component={Main} />
    
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="*" component={NotFoundPage} />
  </LocaleProvider>
);