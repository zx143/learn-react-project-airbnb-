/*
 * @Description:
 * @Date: 2022/12/08 21:59:10
 * @LastEditTime: 2022/12/10 21:48:55
 */
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import classNames from "classnames";
import { TabsWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";
const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  function handleItemClick(index, name) {
    setActiveItemIndex(index);
    tabClick(name);
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames("item", {
                active: activeItemIndex === index,
              })}
              onClick={(e) => handleItemClick(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
