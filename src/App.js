import React from "react";
import {  Home, Work, Exhibition, Contact, About } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Nav,NavText, linkStyle, linkStyl}from "./styles/nav"

const App = () => {
  return (
<>
      <Router>
      <Nav>
      <NavText>
        <Link to="/" style={linkStyl}>ZACH PROCHNIK</Link>
        <Link to="/contact" style={linkStyle}> Contact</Link>
        <Link to="/exhibition" style={linkStyle}>Exhibition</Link>
        <Link to="/about" style={linkStyle}> About</Link>
        <Link to="/work" style={linkStyle}>Work</Link>

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
