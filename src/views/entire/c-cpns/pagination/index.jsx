/*
 * @Description:
 * @Date: 2022/12/12 20:30:36
 * @LastEditTime: 2022/12/13 22:06:33
 */
import {
  changeCurrentPageAction,
  fetchRoomListAction,
} from "@/store/features/entire/actionCreators";
import { Pagination, Stack } from "@mui/material";
// import PropTypes from "prop-types";
import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PaginationWrapper } from "./style";

const EntirePagination = memo((props) => {
  const { currentPage, totalCount } = useSelector(
    (state) => ({
      currentPage: state.entire.currentPage,
      totalCount: state.entire.totalCount,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  function handleChange(ev, page) {
    // console.log('ev' ,ev , page)
    dispatch(changeCurrentPageAction(page - 1));
    dispatch(fetchRoomListAction());
  }

  return (
    <PaginationWrapper>
      <Stack>
        <Pagination
          count={totalCount}
          page={currentPage + 1}
          onChange={handleChange}
        />
      </Stack>
    </PaginationWrapper>
  );
});

// EntirePagination.propTypes = {
//   page: PropTypes.number,
// };

export default EntirePagination;
