import React from "react";
import { Navigate } from "react-router-dom";

// Current public routes are Login and Register.
// Before accessing these routes, this function will check for a logged in user: there is 
// no point sending them to either of the current public routes, so they will be redirected to Home(protected route).
// Otherwise, if no user is currently logged in, this function will allow access to Register and Login
function PublicRoute(props) {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return props.children;
  }
}

export default PublicRoute;
