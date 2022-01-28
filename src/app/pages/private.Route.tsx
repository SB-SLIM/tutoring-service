import React from "react";
import { Navigate } from "react-router-dom";

const userAuth = {
  isAuthenticated: true,
  user: {
    userID: -1,
    name: "",
    email: "",
  },
};

interface PrivateRouteProps {
  component: React.ComponentType;
  path?: string;
}

const PrivateRoute = ({ component: RouteComponent }: PrivateRouteProps) => {
  const { isAuthenticated, user } = userAuth;

  if (isAuthenticated && user) {
    return <RouteComponent />;
  }

  return <Navigate to={"/"} />;
};

export default PrivateRoute;
