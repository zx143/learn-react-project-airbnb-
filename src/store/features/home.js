/*
 * @Description:
 * @Date: 2022/12/03 23:48:00
 * @LastEditTime: 2022/12/11 18:12:31
 */
import {
  apiGetDiscountData,
  apiGetGoodPriceData,
  apiGetHighScoreData,
  apiGetHotRecommendData,
  apiGetLongForData,
  apiGetPlusData,
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
      dispatch(changeDiscountInfoAction(res));
    });

    apiGetHotRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res));
    });

    apiGetLongForData().then((res) => {
      dispatch(changeLongforInfoAction(res));
    });

    apiGetPlusData().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
