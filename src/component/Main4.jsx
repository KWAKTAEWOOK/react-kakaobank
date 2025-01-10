import "../styles/Main4.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/slick.css";
import "../styles/slick-theme.css";
import MultipleItems from "./MultipleItems";

const Main4 = () => {
  return (
    <div className="Main4">
      <div class="checkcard-box con-min-width">
        <div class="con">
          <h1 class="text-center text-[40px] leading-[1.35] font-bold">
            프렌즈 체크카드,
            <br />
            내가 고르는 선택의 즐거움
          </h1>
          <div class="des text-center">
            프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 디자인과 기능을
            선택할 수 있습니다.
          </div>
          <div class="btn-box">
            <a href="#">
              <span>카카오 프렌즈 체크카드</span>
            </a>
          </div>
          <MultipleItems />
        </div>
      </div>
    </div>
  );
};

export default Main4;
