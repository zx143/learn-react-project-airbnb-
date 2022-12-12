/*
 * @Description:
 * @Date: 2022/12/03 23:55:12
 * @LastEditTime: 2022/12/12 23:14:33
 */

import { apiGetRoomListData } from "@/services";
import {
  CHANGE_CURRENT_PAGE,
  CHANGE_ROOM_LIST,
  CHANGE_TOTAL_COUNT,
} from "./constants";

export const changeCurrentPageAction = (currentPage) => {
  return {
    type: CHANGE_CURRENT_PAGE,
    payload: currentPage,
  };
};

export const changeRoomListAction = (roomList) => ({
  type: CHANGE_ROOM_LIST,
  payload: roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: CHANGE_TOTAL_COUNT,
  payload: totalCount,
});

export const fetchRoomListAction = () => {
  return (dispatch, getState) => {
    const currentPage = getState().entire.currentPage
    apiGetRoomListData(currentPage).then((res) => {
      const { list, totalCount } = res;
      dispatch(changeRoomListAction(list));
      dispatch(changeTotalCountAction(totalCount));
    });
  };
};
