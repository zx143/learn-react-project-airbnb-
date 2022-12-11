/*
 * @Description:
 * @Date: 2022/12/05 20:43:41
 * @LastEditTime: 2022/12/11 19:29:52
 */
import { Rating } from "@mui/material";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData, roomWidth } = props;
  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      roomWidth={roomWidth}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages?.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/晚</div>
        <div className="bottom">
          <Rating
            readOnly
            value={itemData?.star_ratings ?? 5}
            precision={0.1}
            sx={{ fontSize: "12px", color: "#0084aa", marginRight: "-1px" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData?.bottom_info?.content && (
            <span className="extra">·{itemData.bottom_info.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
