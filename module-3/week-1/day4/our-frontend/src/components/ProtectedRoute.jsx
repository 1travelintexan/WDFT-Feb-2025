import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  //getting data from the context
  const { isLoading, loggedIn } = useContext(AuthContext);
  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};
