/*
 * @Description:
 * @Date: 2022/12/03 23:48:00
 * @LastEditTime: 2022/12/07 23:31:50
 */
import {
  apiGetDiscountData,
  apiGetGoodPriceData,
  apiGetHighScoreData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetch_data",
  (arg, { dispatch }) => {
    apiGetGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });

    apiGetHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });

    apiGetDiscountData().then((res) => {
      dispatch(changeDiscountDataAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountDataAction(state, { payload }) {
      state.discountInfo = payload;
    },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountDataAction,
} = homeSlice.actions;

export default homeSlice.reducer;
