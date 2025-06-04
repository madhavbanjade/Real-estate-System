import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);

  // the following code says that if the current user is authenticate the user should show the profile which is comes fromm the outlet from the router if not it redirect to sign in page.
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
