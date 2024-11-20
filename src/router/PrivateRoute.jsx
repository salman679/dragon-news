import { useContext } from "react";
import { AuthContext } from "../context/AllContext";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <p>loading</p>;
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/auth/login"} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
};
