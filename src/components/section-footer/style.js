/*
 * @Description:
 * @Date: 2022/12/10 21:14:57
 * @LastEditTime: 2022/12/10 21:32:01
 */
import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.color};
    font-style: 18px;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 5px;
    }
  }
`;
