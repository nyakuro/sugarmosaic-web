import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "pages/about";
import Discography from "pages/discograpy";
import Top from "pages/top";
import HamburgerIcon from "components/icons/HamburgerIcon";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <HamburgerIcon size={24}></HamburgerIcon>
              <Link to="/">Top</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/discography">Discography</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/discography">
            <Discography />
          </Route>
          <Route path="/">
            <Top />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
