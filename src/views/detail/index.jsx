/*
 * @Description: 
 * @Date: 2022/12/03 23:17:45
 * @LastEditTime: 2022/12/18 14:08:30
 */
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)
  return (
    <DetailWrapper>
      <h2>{detailInfo.name}</h2>
    </DetailWrapper>
  )
})

export default Detail