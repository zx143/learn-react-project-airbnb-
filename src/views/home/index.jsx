/*
 * @Description:
 * @Date: 2022/12/03 23:14:54
 * @LastEditTime: 2022/12/09 22:43:06
 */
import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/features/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyObj } from "@/utils";

const Home = memo(() => {
  const dispatch = useDispatch();
  /* redux 中取接口数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  );
  /* 调用接口存接口数据到redux中 */
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣数据 */}
        {isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObj(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo} />
        )}
        {isEmptyObj(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
