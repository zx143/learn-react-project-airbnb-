/*
 * @Description:
 * @Date: 2022/12/14 21:43:08
 * @LastEditTime: 2022/12/14 22:34:15
 */
import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex } = props;
  const contentRef = useRef()
  useEffect(() => {
    const selectItemEl = contentRef.current.children[selectIndex]
    const offsetLeft = selectItemEl.offsetLeft
    console.log("🚀 ~ file: index.jsx:16 ~ useEffect ~ offsetLeft", offsetLeft)
    const elWidth = selectItemEl.clientWidth
    console.log("🚀 ~ file: index.jsx:18 ~ useEffect ~ elWidth", elWidth)
    const refWidth = contentRef.current.clientWidth
    const refScrollWidth = contentRef.current.scrollWidth
    console.log("🚀 ~ file: index.jsx:20 ~ useEffect ~ refWidth", refWidth)
    const halfRefWidth = refWidth * 0.5
    console.log("🚀 ~ file: index.jsx:22 ~ useEffect ~ halfRefWidth", halfRefWidth)
    let scrollDistance = offsetLeft + elWidth * 0.5 - halfRefWidth
    console.log("🚀 ~ file: index.jsx:24 ~ useEffect ~ scrollDistance", scrollDistance)
    if(scrollDistance < 0)  scrollDistance = 0 // 左边特殊情况处理
    if(scrollDistance > refScrollWidth) scrollDistance = refScrollWidth // 右边特殊情况处理
    contentRef.current.style.transform  = `translateXs(${-scrollDistance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>{props.children}</div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number
};

export default Indicator;
