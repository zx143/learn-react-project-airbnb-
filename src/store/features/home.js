/*
 * @Description:
 * @Date: 2022/12/03 23:48:00
 * @LastEditTime: 2022/12/05 19:59:33
 */
import { apiGetGoodPriceData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetch_data", async () => {
  const res = await apiGetGoodPriceData();
  return res;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, {payload}) {
      console.log('extraReducer', state.goodPriceInfo, payload)
      state.goodPriceInfo = payload
    }
  }
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer;
