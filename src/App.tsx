import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { AppRoute } from "const";
import { Header } from "components";
import { Invoices, Overview, Settings } from "views";

function App() {
  return (
    <Router>
      <>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        <Header />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path={AppRoute.Settings}>
            <Settings />
          </Route>
          <Route path={AppRoute.Invoices}>
            <Invoices />
          </Route>
          <Route path={AppRoute.Overview}>
            <Overview />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
