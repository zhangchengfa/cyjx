import React from 'react'
import NavLink from '../lib/NavLink.jsx'

export default React.createClass({
  render() {
    return (
        <div>
          <footer className="fixed-bottom clearfix">
            <div className="col4">
              <NavLink onlyActiveOnIndex to="/">
                <i className="icon iconfont">&#xe602;</i>
                首页
              </NavLink>
            </div>
            <div className="col4">
              <NavLink to="/course">
                <i className="icon iconfont">&#xe613;</i>
                课程
              </NavLink>
            </div>
            <div className="col4">
              <NavLink to="/shop">
                <i className="icon iconfont">&#xe609;</i>
                商城
              </NavLink>
            </div>
            <div className="col4">
              <NavLink to="/user">
                <i className="icon iconfont">&#xe619;</i>
                个人
              </NavLink>
            </div>
          </footer>
          {this.props.children}
        </div>
    )
  }
})
