/*
 * @Description:
 * @Date: 2022/12/12 20:29:33
 * @LastEditTime: 2022/12/12 21:12:46
 */
import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@assets/data/filter_data.json";
import { getId } from "@/utils";
import classNames from "classnames";
const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);
  function handleItemClick(item) {
    console.log("item", item);
    const newItems = [...selectItems];
    const index = newItems.findIndex((selectItem) => selectItem === item);
    if (index > -1) {
      newItems.splice(index, 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              key={getId()}
              className={classNames({
                item,
                active: selectItems.includes(item),
              })}
              onClick={(e) => handleItemClick(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
