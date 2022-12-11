/*
 * @Description:
 * @Date: 2022/12/11 17:35:51
 * @LastEditTime: 2022/12/11 18:05:18
 */
import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  flex-basis: 20%;

  .inner {
    position: relative;
    padding: 0 8px;
    
  }

  .cover {
    width: 100%;
    border-radius: 3px;
  }

  .bg-cover {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    height: 60%;
    border-radius: 0 0 3px 3px;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgba(0, 0, 0) 100%
    );
  }

  .info {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 24px 32px;
    color: #fff;
   

    .city {
      font-size: 18px;
      font-weight: 600;
    }

    .price {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;
