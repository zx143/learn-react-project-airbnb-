/*
 * @Description:
 * @Date: 2022/12/12 20:34:09
 * @LastEditTime: 2022/12/18 14:09:08
 */
import RoomItem from "@/components/room-item";
import { changeDetailInfoAction } from "@/store/features/detail";
import { getId } from "@/utils";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleItemClick = useCallback((itemData) => {
    dispatch(changeDetailInfoAction(itemData))
    navigate('/detail')
  }, [navigate, dispatch]);

  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="list">
        {/* <SectionRooms roomList={roomList} /> */}
        {roomList.map((item) => {
          return (
            <RoomItem
              itemData={item}
              key={getId()}
              roomWidth={"20%"}
              itemClick={handleItemClick}
            />
          );
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
