/*
 * @Description:
 * @Date: 2022/12/04 16:14:25
 * @LastEditTime: 2022/12/12 23:06:29
 */
import React, { memo } from "react";
import IconLogo from "@assets/svg/icon-logo";
import { HeaderLeftWrapper } from "./style";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function toHomePage() {
    navigate('/home')
  }
  return (
    <HeaderLeftWrapper>
      <div className="logo" onClick={toHomePage}>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
