/*
 * @Description: 
 * @Date: 2022/12/04 15:36:23
 * @LastEditTime: 2022/12/04 21:30:38
 */
import React, { memo } from 'react'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft/>
      <HeaderCenter/>
      <HeaderRight/>
    </HeaderWrapper>
  )
})

export default AppHeader