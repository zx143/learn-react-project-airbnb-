/*
 * @Description:
 * @Date: 2022/12/11 18:14:23
 * @LastEditTime: 2022/12/11 21:27:04
 */

import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import { getId } from "@/utils";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list?.map((item) => {
            return <RoomItem key={getId()} itemData={item} roomWidth={'20%'} />;
          })}
        </ScrollView>
      </div>
      <SectionFooter text="plus" />
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
