/*
 * @Description:
 * @Author: lxd
 * @Date: 2020-12-02 11:15:11
 * @LastEditors: lxd
 * @LastEditTime: 2020-12-03 14:32:13
 */
import React, { useState } from 'react'
import screenfull from 'screenfull'
import './header-right.css'
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  LogoutOutlined
} from '@ant-design/icons'
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
      <span className="header-item" title="退出">
        <LogoutOutlined />
      </span>
      <span className="header-item">角色名</span>
      <span
        className="header-item"
        title={full ? '缩小' : '全屏'}
        onClick={onFull}
      >
        {React.createElement(
          full ? FullscreenExitOutlined : FullscreenOutlined,
          {
            key: 'screenfull',
            className: 'screenfull'
          }
        )}
      </span>
    </div>
  )
}
export default HeaderRight
