import { createBrowserRouter } from "react-router";

import { HomePage } from "../home";
import { LoginPage } from "../login";

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
  }
]);

export default Router;
