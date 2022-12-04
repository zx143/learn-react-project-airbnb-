/*
 * @Description:
 * @Date: 2022/12/04 16:14:25
 * @LastEditTime: 2022/12/04 21:30:14
 */
import React, { memo } from "react";
import IconLogo from "@assets/svg/icon-logo";
import { HeaderLeftWrapper } from "./style";

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <div className="logo">
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
