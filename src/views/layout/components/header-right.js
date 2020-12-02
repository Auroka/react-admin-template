/*
 * @Description:
 * @Author: lxd
 * @Date: 2020-12-02 11:15:11
 * @LastEditors: lxd
 * @LastEditTime: 2020-12-02 11:34:51
 */
import React, { useState } from 'react'
import screenfull from 'screenfull'
import './header-right.css'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
function HeaderRight() {
  // 全屏功能
  const [full, setFull] = useState(false)

  function onFull() {
    console.log('click', screenfull)
    if (!screenfull.isEnabled) {
      // 浏览器不支持全屏
      return false
    }
    screenfull
      .toggle()
      .then(res => {
        console.log('isFullscreen:', screenfull.isFullscreen)
        setFull(screenfull.isFullscreen)
      })
      .catch(() => {})
  }
  return (
    <div className="header-right">
      {React.createElement(full ? FullscreenExitOutlined : FullscreenOutlined, {
        key: 'screenfull',
        className: 'screenfull',
        onClick: onFull
      })}
    </div>
  )
}
export default HeaderRight
