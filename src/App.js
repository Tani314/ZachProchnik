import React from "react";
import {  Home, Work, Exhibition, Contact, About } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Nav,NavText} from "./styles/nav"

const App = () => {
  return (
<>
      <Router>
      <Nav>
      <NavText>
        <Link to="/">ZACH PROCHNIK</Link>
        <Link to="/work">Work</Link>
        <Link to="/exhibition">Exhibition</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>

        </NavText>
    </Nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/exhibition">
            <Exhibition />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

      </Router>
</>
  );
};

export default App;
