import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ServicesStyle.css"
import Takeout1 from '../assets/takeout_boxes.svg';
import Takeout2 from '../assets/food.svg';
import Takeout3 from '../assets/dog.svg';
import Takeout4 from '../assets/file.svg';
import Takeout5 from '../assets/cloth.svg';
import Takeout6 from '../assets/electronics.svg';

export default class AutoPlay extends Component {
  render() {
    const settings = {
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
          <img src={Takeout1} alt="Slide 1" />
          </div>
          <div>
          <img src={Takeout2} alt="Slide 1" />
          </div>
          <div>
          <img src={Takeout3} alt="Slide 1" />
          </div>
          <div>
          <img src={Takeout4} alt="Slide 1" />
          </div>
          <div>
          <img src={Takeout5} alt="Slide 1" />
          </div>
          <div>
            <img src={Takeout6} alt="Electronics" />
          </div>
        </Slider>
      </div>
    );
  }
}