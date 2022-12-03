/*
 * @Description: 
 * @Date: 2022/12/03 23:23:53
 * @LastEditTime: 2022/12/03 23:27:05
 */
import React, { memo } from 'react'
import { useNavigate } from "react-router-dom";
const NotFound = memo(() => {
  const navigate = useNavigate()
  function goHome() {
    navigate('/home')
  }
  return (
    <div>
      <h2>您进入的页面不存在!</h2>
      <button onClick={goHome}>返回首页</button>
    </div>
  )
})

export default NotFound