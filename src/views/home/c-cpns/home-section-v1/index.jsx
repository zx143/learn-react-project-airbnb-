/*
 * @Description: 
 * @Date: 2022/12/07 21:23:30
 * @LastEditTime: 2022/12/07 21:28:40
 */
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionWrapper } from "./style";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} />
    </SectionWrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV1;
