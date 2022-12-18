/*
 * @Description: 
 * @Date: 2022/12/04 00:00:40
 * @LastEditTime: 2022/12/18 14:05:35
 */
import { createSlice } from "@reduxjs/toolkit";


const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload
    }
  }
})
export const { changeDetailInfoAction } = detailSlice.actions
export default detailSlice.reducer