import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import { initAuthListenr } from "modules/auth/store/thunks";

import { AppRoute } from "const";
import { Header } from "components";
import {
  Invoices,
  AddInvoice,
  Overview,
  Account,
  Register,
  Login,
} from "views";

function App() {
  const dispatch = useDispatch();

  // useEffect(()=> {

  // })
  useEffect(() => {
    dispatch(initAuthListenr());
  }, []);

  return (
    <Router>
      <>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path={AppRoute.Register}>
            <Register />
          </Route>
          <Route path={AppRoute.Login}>
            <Login />
          </Route>
          <Route path={AppRoute.Account}>
            <Account />
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
              <Link to="/account">Account</Link>
            </li>
          </ul>
        </nav>
      </>
    </Router>
  );
}

export default App;
