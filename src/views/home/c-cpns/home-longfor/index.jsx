/*
 * @Description:
 * @Date: 2022/12/11 17:27:44
 * @LastEditTime: 2022/12/11 19:03:03
 */
import ScrollView from "@/base-ui/scroll-view";
import LongforItem from "@/components/longfor-item";
import SectionHeader from "@/components/section-header";
import { getId } from "@/utils";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";

const HomeLongfor = memo((props) => {
  const { infoData } = props;
  
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list?.map((item) => {
            return <LongforItem key={getId()} itemData={item} />;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongfor;
