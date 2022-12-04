/*
 * @Description:
 * @Date: 2022/12/04 16:14:59
 * @LastEditTime: 2022/12/04 20:37:51
 */
import React, { memo } from "react";
import { HeaderCenterWrapper } from "./style";
import IconSearchBar from "@assets/svg/icon-search-bar";

const HeaderCenter = memo(() => {
  return (
    <HeaderCenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </HeaderCenterWrapper>
  );
});

export default HeaderCenter;
