import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import { useAuthListener } from "modules/user";

import { Header } from "components";
import { Routing } from "modules/routing";

function App() {
  useAuthListener();

  return (
    <Router>
      <>
        <Header />

        <Routing />

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
