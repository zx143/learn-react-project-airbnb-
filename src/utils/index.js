/*
 * @Description: 
 * @Date: 2022/12/03 23:42:22
 * @LastEditTime: 2022/12/11 19:02:56
 */
export * from './is-empty'

export function getId() {
  return Math.random() * 1000000 + Date.now()
}