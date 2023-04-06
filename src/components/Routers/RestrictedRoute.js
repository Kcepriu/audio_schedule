import { Navigate } from "react-router-dom";
import useAuth from "hooks/useAuth";

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/schedule",
}) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
