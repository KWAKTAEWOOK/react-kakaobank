import React from "react";
import "../styles/Main3.css";
const Main3 = () => {
  return (
    <div className="Main3">
      <div class="loan-box con-min-width bg-[#333b58] ">
        <div class="sky">
          <div class="stars">
            <span class="ico-star ico-star-1"></span>
            <span class="ico-star ico-star-2"></span>
            <span class="ico-star ico-star-3"></span>
            <span class="ico-star ico-star-4"></span>
            <span class="ico-star ico-star-5"></span>
            <span class="ico-star ico-star-6"></span>
            <span class="ico-star ico-star-7"></span>
          </div>
          <div class="blue"></div>
          <div class="moon">
            <div class="base"></div>
            <div class="shadow"></div>
          </div>
          <div class="stats"></div>
        </div>
        <div class="con">
          <h1 class="text-center text-[40px]">
            복잡한 서류 제출을 간편하게, 내가 원하는 시간에
          </h1>
          <div class="des text-center text-[15px] mt-[20px] opacity-[0.6]">
            이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할 수
            있습니다.
          </div>
          <nav class="menu-box-1">
            <ul class="flex justify-center">
              <li>
                <a href="#">
                  {" "}
                  <span>마이너스 통장대출</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>신용대출</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>개인사업자 대출</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>전월세보증금 대출</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="img-box-1">
            <img src="/images/전세보증대출.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
