/*
 * @Description:
 * @Date: 2022/12/03 23:56:01
 * @LastEditTime: 2022/12/12 23:14:16
 */

import {
  CHANGE_CURRENT_PAGE,
  CHANGE_ROOM_LIST,
  CHANGE_TOTAL_COUNT,
} from "./constants";

const initialState = {
  currentPage: 0, // 当前请求页码
  roomList: [], // 房间列表数据
  totalCount: 0, // 房间总数
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    case CHANGE_ROOM_LIST:
      return { ...state, roomList: payload };
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: payload };
    default:
      return state;
  }
}

export default reducer;
