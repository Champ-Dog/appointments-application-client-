import React from "react";
import { Navigate } from "react-router-dom";

// Check if token exists to access protected routes, otherwise redirect user to login
function ProtectedRoute(props) {
  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
