/*
 * @Description:
 * @Date: 2022/12/08 22:00:10
 * @LastEditTime: 2022/12/11 15:57:12
 */
import styled from "styled-components";

export const TabsWrapper = styled.div`
  /* display: flex; */
  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;
    margin-right: 16px;
    ${(props) => props.theme.mixin.boxShadow}

    &:last-child {
      margin-right: 16px;
    }
    &.active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondary};
    }
  }
`;
