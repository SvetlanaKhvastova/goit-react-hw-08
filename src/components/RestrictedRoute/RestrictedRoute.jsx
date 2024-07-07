import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/selectors";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

const RestrictedRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <Loader />;
  }

  if (isLoggedIn && token) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default RestrictedRoute;
