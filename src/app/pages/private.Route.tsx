import { UserContext } from "app/context/user.Context";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: React.ComponentType;
  path?: string;
}

const PrivateRoute = ({ component: RouteComponent }: PrivateRouteProps) => {
  const { authTokens } = useContext(UserContext);

  if (authTokens) {
    return <RouteComponent />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default PrivateRoute;
