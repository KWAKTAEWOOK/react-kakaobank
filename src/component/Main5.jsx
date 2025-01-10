import React from "react";
import "../styles/Main5.css";
const Main5 = () => {
  return (
    <div>
      <div class="itskill-box con-min-width">
        <div class="con">
          <h1 class="text-center text-[40px] font-bold leading-[1.35]">
            IT 기술로 카카오뱅크를
            <br />
            만들어 갑니다.
          </h1>
          <div class="divder"></div>
          <div class="info-box">
            <div class="img-box">
              <img src="/images/home_it.png" alt="" />
            </div>
            <ul class="flex">
              <li class="flex-1">
                <h1>간결하고, 유려하게</h1>
                <div class="des">
                  작은 모바일 화면에 적합하도록
                  <br />
                  복잡함을 덜어낸
                  <br />
                  유려하고 친화적인 UX
                </div>
              </li>
              <li class="flex-1">
                <h1>간편한 인증, 철저한 보안</h1>
                <div class="des">
                  지문, 비밀번호로 간편한 인증
                  <br />
                  IT 기술의 강력한 보안 검증과
                  <br />
                  데이터 암호화
                </div>
              </li>
              <li class="flex-1"></li>
              <li class="flex-1">
                <h1>Mobile First, One App</h1>
                <div class="des">
                  모바일에서 뱅킹이 더 쉽고 편리하게
                  <br />
                  여러 앱을 설치할 필요 없이
                  <br />
                  하나의 앱으로
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main5;
