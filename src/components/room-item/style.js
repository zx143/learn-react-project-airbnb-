/*
 * @Description:
 * @Date: 2022/12/05 20:45:11
 * @LastEditTime: 2022/12/11 19:29:45
 */
import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${(props) => props.roomWidth};
  padding: 8px;
  /* margin: 8px 0; */
  flex-shrink: 0;
  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.textColor.primary};
    font-family: 'Microsoft YaHei';

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRatings-icon {
      margin-right: -2px;
    }
  }
`;
