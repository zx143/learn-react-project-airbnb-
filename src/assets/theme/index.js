/*
 * @Description:
 * @Date: 2022/12/04 18:38:56
 * @LastEditTime: 2022/12/04 19:22:51
 */
const theme = {
  color: { primary: "#FF385C", secondary: "#00848A" },
  textColor: {
    primary: '#484848',
    secondary: '#222'
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
      }
    `
  }
};

export default theme;
