/*
 * @Description:
 * @Date: 2022/12/03 23:13:53
 * @LastEditTime: 2022/12/17 19:02:18
 */

import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../views/NotFound";

const Home = React.lazy(() => import("@/views/home"));
const Entire = React.lazy(() => import("@/views/entire"));
const Detail = React.lazy(() => import("@/views/detail"));
const Demo = React.lazy(() => import("@/views/demo"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/demo",
    element: <Demo/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
];

export default routes;
