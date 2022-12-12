/*
 * @Description: 
 * @Date: 2022/12/12 20:30:36
 * @LastEditTime: 2022/12/12 20:33:46
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PaginationWrapper } from './style'

const EntirePagination = memo((props) => {
  return (
    <PaginationWrapper>EntirePagination</PaginationWrapper>
  )
})

EntirePagination.propTypes = {
  infoData: PropTypes.object
}

export default EntirePagination