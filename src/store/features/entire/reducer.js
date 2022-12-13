/*
 * @Description:
 * @Date: 2022/12/03 23:56:01
 * @LastEditTime: 2022/12/13 21:33:51
 */

import {
  CHANGE_CURRENT_PAGE,
  CHANGE_ROOM_LIST,
  CHANGE_TOTAL_COUNT,
  CHANGE_IS_LOADING
} from "./constants";

const initialState = {
  currentPage: 0, // 当前请求页码
  roomList: [], // 房间列表数据
  totalCount: 0, // 房间总数
  isLoading: false, //是否处于请求状态
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    case CHANGE_ROOM_LIST:
      return { ...state, roomList: payload };
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: payload };
    case CHANGE_IS_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
}

export default reducer;
