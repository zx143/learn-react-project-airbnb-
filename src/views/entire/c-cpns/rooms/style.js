/*
 * @Description:
 * @Date: 2022/12/12 20:34:44
 * @LastEditTime: 2022/12/14 21:27:59
 */
import styled from "styled-components";
export const RoomsWrapper = styled.div`
  position: relative;
  padding: 100px 20px 20px;
  /* margin-top: 50px; */

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .fixed-placeholder {
    height: 120px;
    width: 100px;
    position: relative;
  }

  .title {
    font-size: 22px;
    color: #222;
    font-weight: 700;
    margin: 0 0 10px 10px;
  }

  > .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .8);
  }
`;
