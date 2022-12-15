/*
 * @Description: 
 * @Date: 2022/12/14 21:43:30
 * @LastEditTime: 2022/12/14 22:28:23
 */
import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  .i-content {
    display: flex;
    overflow: hidden;
    position: relative;
    transition: transform 250ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`