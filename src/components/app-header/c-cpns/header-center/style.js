/*
 * @Description:
 * @Date: 2022/12/04 16:14:59
 * @LastEditTime: 2022/12/04 20:41:42
 */
import styled from "styled-components";

export const HeaderCenterWrapper = styled.div`
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 48px;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow};

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.color.primary};
    }
  }
`;
