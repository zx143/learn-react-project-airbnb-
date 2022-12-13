/*
 * @Description:
 * @Date: 2022/12/12 20:34:44
 * @LastEditTime: 2022/12/13 21:28:27
 */
import styled from "styled-components";
export const RoomsWrapper = styled.div`
  position: relative;
  padding: 40px 20px;
  margin-top: 50px;

  .list {
    display: flex;
    flex-wrap: wrap;
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
