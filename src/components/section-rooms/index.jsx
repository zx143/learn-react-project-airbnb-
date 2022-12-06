/*
 * @Description:
 * @Date: 2022/12/06 23:12:30
 * @LastEditTime: 2022/12/06 23:19:13
 */
import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomListWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [] } = props;
  return (
    <RoomListWrapper>
      {roomList.slice(0, 8).map((item) => {
        return <RoomItem key={item.id} itemData={item} />;
      })}
    </RoomListWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
