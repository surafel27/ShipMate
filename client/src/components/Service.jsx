import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ServicesStyle.css"

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="moving-card">
        <h2>Any Thing can be sent</h2>
        <Slider {...settings}>
          <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
          </div>
          <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
          </div>
          <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
          </div>
          <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
          </div>
          <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
          </div>
          <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
          </div>
          <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
          </div>
          <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
          </div>
          <div>
          <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
          </div>
        </Slider>
      </div>
    );
  }
}