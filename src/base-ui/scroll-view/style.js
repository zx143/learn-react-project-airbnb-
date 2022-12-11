/*
 * @Description:
 * @Date: 2022/12/10 21:43:50
 * @LastEditTime: 2022/12/11 19:26:44
 */
import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 8px 0;
  .scroll {
    width: 100%;
    overflow: hidden;
    .slot-content {
      display: flex;
      position: relative;
      transition: transform 250ms ease;
    }
  }
  .arrow {
    position: absolute;
    top: 50%;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    border-radius: 15px;
    width: 28px;
    height: 28px;
    border: 1px solid #fff;
    background-color: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
  .left {
    left: 0;
    transform: translate(-50%, -50%);
  }

  .right {
    right: 0;
    transform: translate(50%, -50%);
  }
`;
