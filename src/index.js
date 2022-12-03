/*
 * @Description: 
 * @Date: 2022/12/03 18:58:01
 * @LastEditTime: 2022/12/03 23:32:02
 */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter } from "react-router-dom";

import 'normalize.css'
import 'antd/dist/reset.css';

import App from '@/App';
import 'assets/css/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);
