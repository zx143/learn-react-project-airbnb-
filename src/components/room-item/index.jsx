/*
 * @Description:
 * @Date: 2022/12/05 20:43:41
 * @LastEditTime: 2022/12/18 12:54:36
 */
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData, roomWidth, indicatorNum = 7 } = props;
  const sliderRef = useRef();
  const [selectIndex, setSelectIndex] = useState(0);

  function handleControlIconClick(isRight = true) {
    const len = itemData.picture_urls?.length;
    if (isRight) {
      sliderRef.current.next();
      let newIndex = selectIndex + 1;
      if (newIndex > len - 1) newIndex = 0;
      setSelectIndex(newIndex);
    } else {
      sliderRef.current.prev();
      let newIndex = selectIndex - 1;
      if (newIndex < 0) newIndex = len - 1;
      setSelectIndex(newIndex);
    }
  }

  const pictureEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );
  const sliderEl = (
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
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData.picture_urls?.map((item, index) => {
            return (
              <div key={item} className="dot-item">
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
    </div>
  );
  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      roomWidth={roomWidth}
      indicatorNum={indicatorNum}
    >
      <div className="inner">
        {!itemData.picture_urls ? pictureEl : sliderEl}
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
