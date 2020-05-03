import React, { SFC } from "react";
import { Route, RouteProps } from "react-router-dom";
// import { AppRoute } from "const";
// import { useUserServices } from "modules/user";

const PublicRoute: SFC<RouteProps> = (props) => {
  // const [{ userData, isLoading }] = useUserServices();

  // if (!userData && isLoading) {
  //   return <div>Route loaduing</div>;
  // }

  // if (!userData && !isLoading) {
  //   return <Redirect to={AppRoute.Account} />;
  // }
  return <Route {...props} />;
};

export { PublicRoute };
