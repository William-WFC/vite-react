import Root from "../pages/Home";
import Login from "../pages/Login";
import StoreCount from "../pages/StoreCount";
import {
  createBrowserRouter,
} from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/count",
    element: <StoreCount />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);