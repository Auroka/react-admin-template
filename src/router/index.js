/*
 * @Description:
 * @Author: lxd
 * @Date: 2020-11-25 16:13:21
 * @LastEditors: lxd
 * @LastEditTime: 2020-12-04 09:44:07
 */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Layout from '../views/layout'
import Btns from '../views/btns'
import Home from '../views/home'
import ImageDemo from '../views/components/image'
import Menu1 from '../views/menu/menu1'
import Menu2 from '../views/menu/menu2'
import Menu2_1 from '../views/menu/menu2/menu2-1.js'
import Menu2_2 from '../views/menu/menu2/menu2-2.js'
function router() {
  return (
    <Router>
      <Route
        path="/"
        render={({ location }) => (
          <Layout>
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                timeout={300}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/btns" component={Btns}></Route>
                  <Route path="/components/image" component={ImageDemo}></Route>
                  <Route path="/menu1" component={Menu1}></Route>
                  <Menu2>
                    <Route path="/menu2/menu2-1" component={Menu2_1}></Route>
                    <Route path="/menu2/menu2-2" component={Menu2_2}></Route>
                  </Menu2>
                  <Redirect to="/home"></Redirect>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Layout>
        )}
      ></Route>
    </Router>
  )
}

export default router
