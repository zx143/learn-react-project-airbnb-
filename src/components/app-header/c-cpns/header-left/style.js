/*
 * @Description:
 * @Date: 2022/12/04 16:14:32
 * @LastEditTime: 2022/12/04 18:48:30
 */
import styled from "styled-components";
// #FF385C var(--primary-color);   ${props => props.theme.color.primaryColor}
export const HeaderLeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.primary};
  .logo {
    cursor: pointer;
  }
`;
