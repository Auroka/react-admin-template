/*
 * @Description:
 * @Author: lxd
 * @Date: 2020-11-24 15:38:39
 * @LastEditors: lxd
 * @LastEditTime: 2020-11-25 16:17:59
 */
import React, { useState } from 'react'
import './index.css'
import { Layout, Breadcrumb } from 'antd'
import Nav from './nav'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
const { Header, Sider, Content } = Layout

function Layouts(props) {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
      <Sider
        className="site-layout-sider"
        breakpoint="md"
        collapsed={collapsed}
      >
        <div className="site-layout-logo">我是logo</div>
        <Nav></Nav>
      </Sider>
      <Layout>
        <Header className="site-layout-header">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle
            }
          )}
          <Breadcrumb className="site-breadcrumb">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content className="site-layout-content">{props.children}</Content>
      </Layout>
    </Layout>
  )
}

export default Layouts