/*
 * @Description:
 * @Date: 2022/12/12 20:34:09
 * @LastEditTime: 2022/12/12 23:18:31
 */
import SectionRooms from "@/components/section-rooms";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RoomsWrapper } from "./style";

const EntireRooms = memo((props) => {
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount
  }));
  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="list">
        <SectionRooms roomList={roomList} />
      </div>
    </RoomsWrapper>
  );
});

EntireRooms.propTypes = {
  infoData: PropTypes.object,
};

export default EntireRooms;
