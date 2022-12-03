/*
 * @Description: 
 * @Date: 2022/12/03 23:42:13
 * @LastEditTime: 2022/12/04 00:03:43
 */
import { configureStore } from "@reduxjs/toolkit";
import { entireReducer } from "./features/entire";
import homeReducer from "./features/home";
import detailReducer from "./features/detail";

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store