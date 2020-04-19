import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import { AppRoute } from "const";
import { Header } from "components";
import { Invoices, AddInvoice, Overview, Settings } from "views";

function App() {
  return (
    <Router>
      <>
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
          <Route path={AppRoute.AddInvoice}>
            <AddInvoice />
          </Route>
          <Route path={AppRoute.Overview}>
            <Overview />
          </Route>
        </Switch>
        <nav className="footer">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/invoices">Invoices</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </>
    </Router>
  );
}

export default App;
