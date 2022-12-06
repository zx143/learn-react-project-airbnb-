/*
 * @Description:
 * @Date: 2022/12/04 11:39:55
 * @LastEditTime: 2022/12/05 19:54:01
 */
import $request from "@services/request";

export const apiGetHighScore = () => $request.get({ url: "/home/highscore" });

export const apiGetGoodPriceData = () => $request.get({ url: "/home/goodprice" })
