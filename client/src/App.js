// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SideNav from "./components/SideNav";

// App component
const App = () =>
  <Router>
    <div>
      <SideNav />
      <Wrapper>
        <Route exact path="/" component={ Home } />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;