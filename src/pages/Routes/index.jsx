import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import Page1 from "../Page1";
import Page2 from "../Page2";

import { BASEPATH } from "../../config";

export default function Routes() {
  return (
    <Router basename={BASEPATH}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-1">Page 1</Link>
        </li>
        <li>
          <Link to="/page-2">Page 2</Link>
        </li>
      </ul>
      <br />
      <br />

      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/page-1" component={Page1} />
        <Route path="/page-2" component={Page2} />
        <Route render={() => <h1>NOT FOUND</h1>} />
      </Switch>
    </Router>
  );
}
