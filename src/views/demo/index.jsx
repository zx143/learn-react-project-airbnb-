/*
 * @Description: 
 * @Date: 2022/12/17 18:51:53
 * @LastEditTime: 2022/12/18 11:57:28
 */
import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo((props) => {
  const arr = Array.from({length: 10},(item, index) => (index + 1) * 100)
  console.log('arr', arr)
  const [curIndex, setCurIndex] = useState(0)
  function handlerControlClick(isRight = false) {
    let newIndex = isRight ? curIndex + 1 : curIndex - 1
    const len = arr.length
    if(newIndex < 0) newIndex = len - 1
    if(newIndex > len - 1) newIndex = 0
    setCurIndex(newIndex)
  }
  return (
    <DemoWrapper>
      <div className="control">
        <button className="prev" onClick={e => handlerControlClick(false)}>prev</button>
        <button className="next" onClick={e => handlerControlClick(true)}>next</button>
      </div>
      <div className="indicator">
        <Indicator selectIndex={curIndex}>
          {
            arr?.map(item => {
              return <button className='item' key={item}>{item}</button>
            })
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo