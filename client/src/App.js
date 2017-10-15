// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";

// Import CSS
import "./App.css";

// App component
const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/main" component={ Main } />
    </div>
  </Router>;

export default App;