// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

// Import CSS
import "./App.css";

// App component
const App = () =>
  <LocaleProvider locale={enUS}>
    <Router>
      <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/main" component={ Main } />
      </div>
    </Router>
  </LocaleProvider>;

export default App;