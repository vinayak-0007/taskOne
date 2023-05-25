import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Membership from "../Pages/Membership";
import Apply from "../Pages/Apply";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/membership",
      element: <Membership />,
    },
    {
      path: "/apply",
      element: <Apply />,
    },
  ]);
  return routes;
};
export default Routes;
