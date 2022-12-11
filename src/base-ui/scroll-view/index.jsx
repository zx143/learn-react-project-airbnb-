/*
 * @Description:
 * @Date: 2022/12/10 21:43:42
 * @LastEditTime: 2022/12/11 16:07:23
 */
// import PropTypes from "prop-types";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import React, { memo, useEffect, useState, useRef } from "react";
import { ScrollViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  /* 组件渲染完毕,判断是否显示右侧按钮 */
  const scrollContentRef = useRef();
  const totalDistanceRef = useRef(0);
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = (totalDistanceRef.current =
      scrollWidth - clientWidth);
    setShowRightArrow(totalDistance > 0);
  }, [props.children]);

  function changeScrollHandle(direction) {
    let newIndex = null;
    switch (direction) {
      case "left":
        newIndex = posIndex - 1;
        break;
      case "right":
        newIndex = posIndex + 1;
        break;
      default:
        break;
    }
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    console.log(
      "🚀 ~ file: index.jsx:41 ~ changeScrollHandle ~ newOffsetLeft",
      newOffsetLeft
    );
    scrollContentRef.current.style.transform = `translateX(-${newEl.offsetLeft}px)`;
    setPosIndex(newIndex);
    // 是否继续显示 right-arrow
    setShowRightArrow(totalDistanceRef.current > newOffsetLeft);
    // 是否显示 left-arrow
    setShowLeftArrow(newOffsetLeft > 0);
  }
  return (
    <ScrollViewWrapper>
      {showLeftArrow && (
        <div className="arrow left" onClick={(e) => changeScrollHandle("left")}>
          <IconArrowLeft />
        </div>
      )}
      {showRightArrow && (
        <div
          className="arrow right"
          onClick={(e) => changeScrollHandle("right")}
        >
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="slot-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

// ScrollView.propTypes = {};

export default ScrollView;
