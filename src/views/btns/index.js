/*
 * @Description:
 * @Author: lxd
 * @Date: 2020-11-17 15:11:10
 * @LastEditors: lxd
 * @LastEditTime: 2020-11-25 16:22:25
 */
import React from 'react'
import './style.css'
import Btn1 from './components/btn1'
import Btn2 from './components/btn2'
import Btn3 from './components/btn3'
import Btn4 from './components/btn4'
function Btns() {
  return (
    <div className="btns-wrap">
      <Btn1></Btn1>
      <Btn2></Btn2>
      <Btn3></Btn3>
      <Btn4></Btn4>
    </div>
  )
}
export default Btns
