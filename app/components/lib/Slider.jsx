import React from 'react'
import Slider from 'react-slick'

export default React.createClass({
  render: function () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false
    };
    return (
        <Slider {...settings}>
          <div><img src='../../images/roll00.jpg' /></div>
          <div><img src='../../images/roll01.jpg' /></div>
          <div><img src='../../images/roll02.jpg' /></div>
        </Slider>
    );
  }
});
