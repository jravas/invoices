import React from "react";
import { AppRoute } from "const";
import { Switch, Route } from "react-router-dom";
import { Account, AddInvoice, Invoices, Overview } from "views";
import { PrivateRoute, PublicRoute } from "./";

export const Routing = () => {
  return (
    <Switch>
      <PublicRoute exact path={AppRoute.Account} component={Account} />
      <PublicRoute exact path={AppRoute.AddInvoice} component={AddInvoice} />
      <PrivateRoute exact path={AppRoute.Invoices} component={Invoices} />
      <PrivateRoute exact path={AppRoute.Overview} component={Overview} />
      <Route path="*" component={() => <div>Not found</div>} />
    </Switch>
  );
};
