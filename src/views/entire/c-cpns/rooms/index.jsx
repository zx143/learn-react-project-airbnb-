/*
 * @Description:
 * @Date: 2022/12/12 20:34:09
 * @LastEditTime: 2022/12/14 21:26:39
 */
import RoomItem from "@/components/room-item";
import { getId } from "@/utils";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RoomsWrapper } from "./style";

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="list">
        {/* <SectionRooms roomList={roomList} /> */}
        {roomList.map((item) => {
          return <RoomItem itemData={item} key={getId()} roomWidth={"20%"} />;
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

EntireRooms.propTypes = {
  infoData: PropTypes.object,
};

export default EntireRooms;
