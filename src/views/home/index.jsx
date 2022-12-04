/*
 * @Description: 
 * @Date: 2022/12/03 23:14:54
 * @LastEditTime: 2022/12/04 11:55:54
 */
import React, { memo, useEffect, useState } from 'react'
import { apiGetHighScore } from '@services/modules/home'

const Home = memo(() => {
  const [highScore, setHighScore] = useState({})
  useEffect(() => {
    apiGetHighScore().then(res => {
      console.log('home api', res);
      setHighScore(res)
    })
  }, [])
  return (
    <div>
      <h2>{highScore.title}</h2>
      <h2>{highScore.subTitle}</h2>
      <ul>
        {
          highScore.list?.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default Home