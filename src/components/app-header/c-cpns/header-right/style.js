/*
 * @Description:
 * @Date: 2022/12/04 16:15:02
 * @LastEditTime: 2022/12/04 21:14:08
 */
import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  color: ${(props) => props.theme.textColor.primary};

  .btns {
    display: flex;
    align-items: center;

    > .btn {
      box-sizing: content-box;
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:last-child {
        margin-left: -5px;
        margin-right: 10px;
      }

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .login-menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 77px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;

    > span {
      box-sizing: content-box;
      padding: 0 5px;
    }

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      right: 0;
      top: 54px;
      width: 240px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 16px rgb(0 0 0 .12);
      color: #666;

      .top {
        border-bottom: 1px solid #ddd;
      }

      .top,
      .bottom {
        box-sizing: content-box;
        padding: 8px 0;

        > div {
          height: 40px;
          line-height: 40px;
          box-sizing: content-box; 
          padding: 0px 16px;

          &:nth-child(n + 1) {
            margin-top: 4px;
          }
          &:hover {
            background-color: #f2f2f2;
          }
        }
      }
    }
  }
`;
