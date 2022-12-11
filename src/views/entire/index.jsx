/*
 * @Description: 
 * @Date: 2022/12/03 23:17:39
 * @LastEditTime: 2022/12/11 21:35:12
 */
import React, { memo } from 'react'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <div className="filter">filter-section</div>
      <div className="rooms">rooms</div>
      <div className="pagination">pagination</div>
    </EntireWrapper>
  )
})

export default Entire