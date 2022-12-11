/*
 * @Description:
 * @Date: 2022/12/10 21:14:50
 * @LastEditTime: 2022/12/11 21:29:49
 */
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FooterWrapper } from "./style";
const SectionFooter = memo((props) => {
  const { text } = props;
  let showText = "显示全部";
  if (text) showText = `显示更多${text}房源`;

  const navigate = useNavigate()
  function moreClickHandle() {
    navigate('/entire')
  }
  return (
    <FooterWrapper color={text ? "#00848a" : "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">{showText}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  text: PropTypes.string,
};

export default SectionFooter;
