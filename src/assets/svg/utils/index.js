/*
 * @Description: 
 * @Date: 2022/12/04 16:56:35
 * @LastEditTime: 2022/12/04 20:37:02
 */
export const styleStrToObj = (styleStr) => {
  var obj = {},
    s = styleStr
      .toLowerCase()
      .replace(/-(.)/g, function (m, g) {
        return g.toUpperCase();
      })
      .replace(/;\s?$/g, "")
      .split(/:|;/g);
  for (var i = 0; i < s.length; i += 2)
    obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "");
  return obj;
};
