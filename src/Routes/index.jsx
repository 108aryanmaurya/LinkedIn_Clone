import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import ProfileLayout from "../layouts/ProfileLayout";
import Register from "../pages/Register";
import Home from "../pages/Home";

import path from "path";
import HomeLayout from "../layouts/HomeLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/home",
    element: <HomeLayout />,
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
  },
]);
