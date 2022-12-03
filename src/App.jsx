/*
 * @Description:
 * @Date: 2022/12/03 18:58:01
 * @LastEditTime: 2022/12/03 23:33:37
 */
import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">header</div>
      <div className="main">{useRoutes(routes)}</div>
      <div className="footer">footer</div>
    </div>
  );
});

export default App;
