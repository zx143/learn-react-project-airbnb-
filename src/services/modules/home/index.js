/*
 * @Description: 
 * @Date: 2022/12/04 11:39:55
 * @LastEditTime: 2022/12/04 12:00:25
 */
import $request from "../../request";

export const apiGetHighScore = () => $request.get({url: '/home/highscore'})