/*
 * @Description:
 * @Date: 2022/12/14 21:43:08
 * @LastEditTime: 2022/12/18 12:25:33
 */
import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex } = props;
  const contentRef = useRef()
  useEffect(() => {
    // !滚动  当前el相对上级定位元素的距离(offsetLeft) + 自身width一半 - 父容器的一半
    const selectItemEl = contentRef.current.children[selectIndex]
    const offsetLeft = selectItemEl.offsetLeft
    // 自身的宽度
    const elWidth = selectItemEl.clientWidth
    // 父容器的宽度
    const refWidth = contentRef.current.clientWidth
    // 父容器最大滚动距离
    const refScrollWidth = contentRef.current.scrollWidth
    const halfRefWidth = refWidth * 0.5
    let scrollDistance = offsetLeft + elWidth * 0.5 - halfRefWidth
    if(scrollDistance < 0)  scrollDistance = 0 // 左边特殊情况处理
    if(scrollDistance > refScrollWidth) scrollDistance = refScrollWidth // 右边特殊情况处理
    contentRef.current.style.transform  = `translateX(${-scrollDistance}px)`
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
