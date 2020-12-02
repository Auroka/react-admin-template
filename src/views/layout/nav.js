/*
 * @Description:
 * @Author: lxd
 * @Date: 2020-11-24 16:08:14
 * @LastEditors: lxd
 * @LastEditTime: 2020-11-30 11:23:27
 */
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import {
  HomeOutlined,
  SmileOutlined,
  AppstoreOutlined,
  MenuOutlined
} from '@ant-design/icons'

const { SubMenu } = Menu

// 待处理：
// 1.页面刷新，根据当前路由选择
// 2.面包屑处理
// 3.考虑动态路由

function Nav() {
  const state = useLocation().state || {}
  return (
    <Menu
      defaultSelectedKeys={state.selectdKeys || ['home']}
      defaultOpenKeys={state.openKeys || ['home']}
      theme="dark"
      mode="inline"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link
          to={{
            pathname: '/home',
            state: {
              selectdKeys: ['home'],
              openKeys: ['home'],
              breadcrumb: ['首页']
            }
          }}
        >
          首页
        </Link>
      </Menu.Item>
      <Menu.Item key="btns" icon={<SmileOutlined />}>
        <Link
          to={{
            pathname: '/btns',
            state: {
              selectdKeys: ['btns'],
              openKeys: ['btns'],
              breadcrumb: ['酷炫按钮']
            }
          }}
        >
          酷炫按钮
        </Link>
      </Menu.Item>
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="组件">
        <Menu.Item key="1">大搜狐啊</Menu.Item>
      </SubMenu>
      <SubMenu key="menu" icon={<MenuOutlined />} title="路由嵌套">
        <Menu.Item key="/menu1">
          <Link
            to={{
              pathname: '/menu1',
              state: {
                selectdKeys: ['menu1'],
                openKeys: ['menu', 'menu1'],
                breadcrumb: ['路由嵌套', '菜单1']
              }
            }}
          >
            菜单1
          </Link>
        </Menu.Item>
        <SubMenu key="menu2" title="菜单2">
          <Menu.Item key="menu2-1">
            <Link
              to={{
                pathname: '/menu2/menu2-1',
                state: {
                  selectdKeys: ['menu2-1'],
                  openKeys: ['menu', 'menu2', 'menu2-1'],
                  breadcrumb: ['路由嵌套', '菜单2', '菜单2-1']
                }
              }}
            >
              菜单2-1
            </Link>
          </Menu.Item>
          <Menu.Item key="/menu2/menu2-2">
            <Link
              to={{
                pathname: '/menu2/menu2-2',
                state: {
                  selectdKeys: ['menu2-2'],
                  openKeys: ['menu', 'menu2', 'menu2-2'],
                  breadcrumb: ['路由嵌套', '菜单2', '菜单2-2']
                }
              }}
            >
              菜单2-2
            </Link>
          </Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  )
}

export default Nav
