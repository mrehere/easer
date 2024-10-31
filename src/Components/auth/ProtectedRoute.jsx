import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { loggedUser, loading } = useAuth();
  if (loading) {
    // If the user is not authenticated, redirect them to the Signin page
    return null;
  }

  if (!loggedUser) {
    return <Navigate to="/" />;
  }

  // If the user is authenticated, render the child components (like Home)
  return children;
};

export default ProtectedRoute;
