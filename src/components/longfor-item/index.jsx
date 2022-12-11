/*
 * @Description:
 * @Date: 2022/12/11 17:35:45
 * @LastEditTime: 2022/12/11 17:59:12
 */
import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";

const LongforItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="inner">
        <img className="cover" src={itemData.picture_url} alt="" />
        <div className="bg-cover"></div>
        <div className="info">
          <div className="city">{itemData.city}</div>
          <div className="price">均价:{itemData.price}</div>
        </div>
      </div>
    </ItemWrapper>
  );
});

LongforItem.propTypes = {
  itemData: PropTypes.object,
};

export default LongforItem;
