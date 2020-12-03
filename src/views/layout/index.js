/*
 * @Description:
 * @Author: lxd
 * @Date: 2020-11-24 15:38:39
 * @LastEditors: lxd
 * @LastEditTime: 2020-12-02 11:40:04
 */
import React, { useState } from 'react'
import './index.css'
import { Layout, Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import Nav from './nav'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import HeaderRight from './components/header-right'

const { Header, Sider, Content } = Layout

function Layouts(props) {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const state = useLocation().state || {}
  const breadcrumb = state.breadcrumb || []
  return (
    <Layout>
      <Sider
        className="site-layout-sider"
        breakpoint="md"
        collapsed={collapsed}
      >
        <div className="site-layout-logo">logo</div>
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
            {breadcrumb.map((item, index) => {
              return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            })}
          </Breadcrumb>
          <HeaderRight></HeaderRight>
        </Header>
        <Content className="site-layout-content">{props.children}</Content>
      </Layout>
    </Layout>
  )
}

export default Layouts
