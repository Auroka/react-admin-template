/*
 * @Description:
 * @Author: lxd
 * @Date: 2020-11-24 16:08:14
 * @LastEditors: lxd
 * @LastEditTime: 2020-11-25 17:01:28
 */
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, AppstoreOutlined, MenuOutlined } from '@ant-design/icons'

const { SubMenu } = Menu

// 待处理：
// 1.页面刷新，根据当前路由选择
// 2.面包屑处理

function Nav() {
  return (
    <Menu defaultSelectedKeys={['home']} theme="dark" mode="inline">
      <Menu.Item key="home" icon={<HomeOutlined />} title="首页">
        <Link to="/home">首页</Link>
      </Menu.Item>
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="组件">
        <Menu.Item key="1">大搜狐啊</Menu.Item>
        <Menu.Item key="btns">
          <Link to="/btns">酷炫按钮</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="menu" icon={<MenuOutlined />} title="路由嵌套">
        <Menu.Item key="menu1">
          <Link to="/menu1">菜单1</Link>
        </Menu.Item>
        <SubMenu key="menu2" title="菜单2">
          <Menu.Item key="menu2-1">
            <Link to="/menu2/menu2-1">菜单2-1</Link>
          </Menu.Item>
          <Menu.Item key="menu2-2">
            <Link to="/menu2/menu2-2">菜单2-2</Link>
          </Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  )
}

export default Nav
