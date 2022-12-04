/*
 * @Description:
 * @Date: 2022/12/04 16:15:02
 * @LastEditTime: 2022/12/04 21:29:44
 */
import React, { memo, useState, useEffect } from "react";
import IconGlobal from "@assets/svg/icon-global";
import IconLoginMenu from "@assets/svg/icon-login-menu";
import IconLoginPlaceholderAvatar from "@assets/svg/icon-login-placeholder-avatar";
import { HeaderRightWrapper } from "./style";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  function loginMenuClickHandle() {
    setShowPanel(true);
  }
  // 副作用函数
  useEffect(() => {
    const _handleClick = () => {
      setShowPanel(false)
    }
    window.addEventListener('click', _handleClick, true)
    return () => {
      window.removeEventListener('click', _handleClick, true)
    }
  }, [])

  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="login-menu" onClick={loginMenuClickHandle}>
        <span className="menu">
          <IconLoginMenu />
        </span>
        <span className="avatar">
          <IconLoginPlaceholderAvatar />
        </span>
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="register">注册</div>
              <div className="login">登录</div>
            </div>
            <div className="bottom">
              <div className="register">出租房源</div>
              <div className="login">开展体验</div>
              <div className="login">帮助</div>
            </div>
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
