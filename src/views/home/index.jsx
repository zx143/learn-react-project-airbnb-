/*
 * @Description:
 * @Date: 2022/12/03 23:14:54
 * @LastEditTime: 2022/12/07 23:39:40
 */
import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/features/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  const dispatch = useDispatch();
  /* redux 中取接口数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo
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
        <div className="discount-info">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
          <SectionRooms roomWidth={'33.3333%'} roomList={discountInfo.dest_list?.['成都']} />
        </div>

        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
