// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Main from "./pages/Main";

// App component
const App = () =>
  <Router>
    <div>
      <Wrapper>
        <Route exact path="/" component={ Main } />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;