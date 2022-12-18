/*
 * @Description:
 * @Date: 2022/12/14 21:43:30
 * @LastEditTime: 2022/12/18 12:43:11
 */
import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    display: flex;
    position: relative;
    transition: transform 250ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`;
