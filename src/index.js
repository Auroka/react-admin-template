/*
 * @Description:
 * @Author: lxd
 * @Date: 2020-11-24 15:38:39
 * @LastEditors: lxd
 * @LastEditTime: 2020-11-25 16:34:56
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
// import App from './views/layout'
import Router from './router'
import reportWebVitals from './reportWebVitals'
import 'normalize.css/normalize.css' // 重置样式

ReactDOM.render(<Router />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
