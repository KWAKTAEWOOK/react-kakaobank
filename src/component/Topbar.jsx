import React from "react";
import  kakaobank_logo from '../assets/images/kakaobank_logo.svg';

import "../styles/Topbar.css";
const Topbar = () => {
    return (
        <div className="Topbar">
            <header class="top-bar h-[81px] border-b-[1px]">
  <div class="con mx-auto h-full flex">
    <a href="#!" class="flex items-center px-[10px] mr-auto">
    <img src={kakaobank_logo} /> </a>
    <nav class="menu-1">
      <ul class="flex h-full">    
        <li><a href="#" class="flex h-full items-center px-[20px] hover:underline">은행소개</a></li>
        <li><a href="#" class="flex h-full items-center px-[20px] hover:underline">IR투자정보</a></li>
        <li><a href="#" class="flex h-full items-center px-[20px] hover:underline">상품안내</a></li>
        <li><a href="#" class="flex h-full items-center px-[20px] hover:underline">고객센터</a></li>
        <li><a href="#" class="flex h-full items-center px-[20px] hover:underline">이벤트</a></li>
      </ul>
    </nav>
    <a href="#" class="btn-go-submit ml-[20px] bg-[#fede22] self-center rounded-[40px] p-[13px]">서류제출하기</a>
  </div>
  

</header>
        </div>
    );
};

// 카카오뱅크 로고
export default Topbar;
