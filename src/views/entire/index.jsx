/*
 * @Description: 
 * @Date: 2022/12/03 23:17:39
 * @LastEditTime: 2022/12/12 23:15:31
 */
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/filter'
import EntirePagination from './c-cpns/pagination'
import EntireRooms from './c-cpns/rooms'
import { EntireWrapper } from './style'
import { fetchRoomListAction } from '@/store/features/entire/actionCreators'

const Entire = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire