import Home from "@src/pages";
import DashBoard from "@src/pages/dashboard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);
