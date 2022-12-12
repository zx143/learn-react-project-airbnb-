/*
 * @Description: 
 * @Date: 2022/12/12 22:37:09
 * @LastEditTime: 2022/12/12 23:13:02
 */
import $request from "@services/request";

export const apiGetRoomListData = (offset = 0, size = 20) =>
  $request.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
