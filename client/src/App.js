import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Home from "./pages/Home";
import Main from "./pages/Main";

// css
import "./App.css";

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/main" component={ Main } />
    </div>
  </Router>

export default App;