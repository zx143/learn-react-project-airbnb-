/*
 * @Description:
 * @Date: 2022/12/09 21:41:30
 * @LastEditTime: 2022/12/09 22:38:11
 */
import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import { SectionV2Wrapper } from "./style";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  const tabNames = infoData.dest_address?.map((item) => item.name);
  // initialName
  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  const TabClickHandle = useCallback((tabName) => {
    setName(tabName);
  }, []);

  // useEffect(() => {
  // 此处会执行三次初始化操作 第一次infoData = {}   第二次 infoData有值的时候 第三次执行setName的时候
  //   setName(infoData.dest_address[0].name)
  // }, [infoData])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={TabClickHandle} />
      <SectionRooms
        roomWidth={"33.3333%"}
        roomList={infoData.dest_list?.[name]}
      />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
