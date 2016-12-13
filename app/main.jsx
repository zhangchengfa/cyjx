import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

/* 组件加载 */
import App from './components/index/App.jsx'
import Home from './components/index/Home.jsx'
import Course from './components/course/Course.jsx'
import Shop from './components/shop/Shop.jsx'
import User from './components/user/User.jsx'

/* 样式文件加载 */
import './css/reset.css'
import './css/iconfont.css'
import './scss/common.scss'
import './scss/main.scss'

import './lib/slick-carousel/slick/slick.css'
import './lib/slick-carousel/slick/slick-theme.css'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="course" component={Course}/>
            <Route path="shop" component={Shop}/>
            <Route path="user" component={User}/>
        </Route>
    </Router>
), document.getElementById('app'))
