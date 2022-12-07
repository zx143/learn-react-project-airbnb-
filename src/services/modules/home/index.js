/*
 * @Description:
 * @Date: 2022/12/04 11:39:55
 * @LastEditTime: 2022/12/07 23:29:07
 */
import $request from "@services/request";

export const apiGetHighScoreData = () =>
  $request.get({ url: "/home/highscore" });

export const apiGetGoodPriceData = () =>
  $request.get({ url: "/home/goodprice" });

export const apiGetDiscountData = () => $request.get({ url: "home/discount" });
