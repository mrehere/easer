import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ authUser, children }) => {
  if (!authUser) {
    // If the user is not authenticated, redirect them to the Signin page
    return <Navigate to="/" />;
  }
  // If the user is authenticated, render the child components (like Home)
  return children;
};

export default ProtectedRoute;
