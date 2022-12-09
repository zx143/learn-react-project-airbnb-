/*
 * @Description:
 * @Date: 2022/12/09 22:09:52
 * @LastEditTime: 2022/12/09 22:27:05
 */
const typeOf = (variable, verifyType) => {
  const _types = [
    "string",
    "number",
    "boolean",
    "object",
    "array",
    "symbol",
    "function",
    "date",
    "regexp",
  ];
  const _type = Object.prototype.toString
    .call(variable)
    .slice(8, -1)
    .toLowerCase();
  if (verifyType && !_types.includes(verifyType))
    return console.error(
      `调用typeOf方法时第二项参数请传入正确的验证类型! ${_types.join("/")}`
    );
  return verifyType ? _type === verifyType : _type;
};

export const isEmptyObj = (variable) =>
  typeOf(variable, "object") && !!Object.keys(variable).length;
