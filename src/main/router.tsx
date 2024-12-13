import { createBrowserRouter } from "react-router";

import { HomePage } from "../home";
import { LoginPage } from "../login";
import { NotFoundPage } from "../notFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    loader: undefined,
  },
  {
    path: "/login",
    element: <LoginPage/>,
    loader: undefined,
  },
  {
    path: "*",
    element: <NotFoundPage/>,
  }
]);

export default Router;
