import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/slick.css";
import "../styles/slick-theme.css";
import "../App.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      arrows: true,
      centerPadding: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <div className="layout">
          <Slider {...settings}>
            <div>
              <img className="cord" src="/images/무지카드.png" alt="01" />
            </div>
            <div>
              <img className="cord" src="/images/콘카드.png" alt="02" />
            </div>
            <div>
              <img className="cord" src="/images/검은색카드.png" alt="" />
            </div>
            <div>
              <img className="cord" src="/images/라이언카드.png" alt="" />
            </div>
            <div>
              <img className="cord" src="/images/어피치카드.png" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
