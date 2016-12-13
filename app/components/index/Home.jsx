import React from 'react'
import Slider from '../lib/Slider.jsx'
import NavLink from '../lib/NavLink.jsx'
import LoadList from './LoadList.jsx'

export default React.createClass({
  render() {
    return (
      <div>
          <div className="banner">
              <div className="swiper-container">
                  <Slider />
              </div>
          </div>
          <div className="recommend">
              <div className="rtitle">
                  <i></i> <span>推荐课程</span>
                  <NavLink to="/course">更多>></NavLink>
              </div>
              <LoadList></LoadList>
          </div>
      </div>
    )
  }
})
