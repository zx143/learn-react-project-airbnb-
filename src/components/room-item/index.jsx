/*
 * @Description:
 * @Date: 2022/12/05 20:43:41
 * @LastEditTime: 2022/12/14 21:36:02
 */
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData, roomWidth } = props;
  const sliderRef = useRef();

  function handleControlIconClick(isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev();
  }
  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      roomWidth={roomWidth}
    >
      <div className="inner">
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}

        <div className="slider">
          <div className="control">
            <div
              className="btn left"
              onClick={(e) => handleControlIconClick(false)}
            >
              <IconArrowLeft width={30} height={30} />
            </div>
            <div
              className="btn right"
              onClick={(e) => handleControlIconClick(true)}
            >
              <IconArrowRight width={30} height={30} />
            </div>
          </div>
          <Carousel dots={false} ref={sliderRef}>
            {itemData.picture_urls?.map((item) => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
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
