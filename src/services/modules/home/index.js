/*
 * @Description:
 * @Date: 2022/12/04 11:39:55
 * @LastEditTime: 2022/12/11 18:11:19
 */
import $request from "@services/request";

export const apiGetHighScoreData = () =>
  $request.get({ url: "/home/highscore" });

export const apiGetGoodPriceData = () =>
  $request.get({ url: "/home/goodprice" });

export const apiGetDiscountData = () => $request.get({ url: "home/discount" });

export const apiGetHotRecommendData = () =>
  $request.get({ url: "home/hotrecommenddest" });

export const apiGetLongForData = () => $request.get({ url: "home/longfor" });

export const apiGetPlusData = () => $request.get({ url: "/home/plus" });
