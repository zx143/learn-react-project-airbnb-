/*
 * @Description:
 * @Date: 2022/12/06 23:12:30
 * @LastEditTime: 2022/12/07 23:41:06
 */
import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomListWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [], roomWidth = '25%' } = props;
  return (
    <RoomListWrapper>
      {roomList.slice(0, 8).map((item) => {
        return <RoomItem key={item.id} itemData={item} roomWidth={roomWidth} />;
      })}
    </RoomListWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
