import React from "react";
import  kakaobank_logo from '../assets/images/kakaobank_logo.svg';

import "../styles/Topbar.css";
const Topbar = () => {
    return (
        <div className="Topbar">
            <header class="top-bar con-min-width h-[81px] border-b-[1px] bg-white">
  <div class="con mx-auto h-full flex">
    <a href="#!" class="flex items-center px-[10px] mr-auto">
    <img src={kakaobank_logo} /> </a>
    <nav class="menu-1">  
      <ul class="flex h-full">
        <li>
          <a href="#" class="flex h-full items-center px-[10px] ">은행소개</a>
          <div class="con-min-width">
            <div class="con mx-auto">
              <ul class="menu-2 flex">
                <li class=" flex-1">
                  <a href="#">브랜드</a>
                  <ul>
                    <li><a href="#">주주사 소개</a></li>
                    <li><a href="#">오시는 길</a></li>
                    <li><a href="#">제휴문의</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">윤리경영</a>
                  <ul>
                    <li><a href="#">윤리강령</a></li>
                    <li><a href="#">임직원행동기준</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">인재영입 ></a>
                </li>
                <li class="flex-1">
                  <a href="#">새소식</a>
                  <ul>
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">보도자료</a></li>
                    <li><a href="#">입찰공고</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="flex h-full items-center px-[10px] hover:underline">IR투자정보</a>
            <div class="con-min-width">
            <div class="con mx-auto">
              <ul class="menu-2 flex">
                <li class=" flex-1">
                  <a href="#">공시정보</a>
                  <ul>
                    <li><a href="#">전자공시</a></li>
                    <li><a href="#">경영공시</a></li>
                    <li><a href="#">바젤공시</a></li>
                    <li><a href="#">기타공시</a></li>
                    <li><a href="#">공시규정</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">경영정보</a>
                  <ul>
                    <li><a href="#">이사회</a></li>
                    <li><a href="#">지속가능경영</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">재무정보</a>
                  <ul>
                    <li><a href="#">재무제표</a></li>
                    <li><a href="#">감사보고서</a></li>
                    <li><a href="#">영업보고서</a></li>
                    <li><a href="#">신용등급</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">IR자료실</a>
                  <ul>
                    <li><a href="#">실적발표</a></li>
                    <li><a href="#">주가정보</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">IR일정</a>
                  <ul>
                    <li><a href="#">IR행사</a></li>
                    <li><a href="#">IR미팅예약</a></li>
                    <li><a href="#">주주총회</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">공고</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="flex h-full items-center px-[10px] hover:underline">상품안내</a>
            <div class="con-min-width">
            <div class="con mx-auto">
              <ul class="menu-2 flex">
                <li class=" flex-1">
                  <a href="#">예적금</a>
                  <ul>
                    <li><a href="#">입출금통장</a></li>
                    <li><a href="#">모임통장</a></li>
                    <li><a href="#">세이프박스</a></li>
                    <li><a href="#">저금통</a></li>
                    <li><a href="#">정기예금</a></li>
                    <li><a href="#">자유적금</a></li>
                    <li><a href="#">26주적금</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">대출</a>
                  <ul>
                    <li><a href="#">비상금대출</a></li>
                    <li><a href="#">마이너스 통장대출</a></li>
                    <li><a href="#">신용대출</a></li>
                    <li><a href="#">개인사업자 대출</a></li>
                    <li><a href="#">전월세보증금 대출</a></li>
                    <li><a href="#">주택담보대출</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">서비스</a>
                  <ul>
                    <li><a href="#">내 신용정보</a></li>
                    <li><a href="#">해외송금 보내기</a></li>
                    <li><a href="#">해외송금 받기</a></li>
                    <li><a href="#">프렌즈 체크카드</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">제휴서비스</a>
                  <ul>
                    <li><a href="#">증권사 주식계좌</a></li>
                    <li><a href="#">제휴 신용카드</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">mini</a>
                  <ul>
                    <li><a href="#">카카오뱅크 mini</a></li>
                    <li><a href="#">mini카드</a></li>
                    <li><a href="#">mini 26일저금</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="flex h-full items-center px-[10px] hover:underline">고객센터</a>
            <div class="con-min-width">
            <div class="con mx-auto">
              <ul class="menu-2 flex ">
                <li class=" flex-1">
                  <a href="#">이용안내</a>
                  <ul>
                    <li><a href="#">자주 묻는 질문</a></li>
                    <li><a href="#">이용시간 안내</a></li>
                    <li><a href="#">ATM 이용안내</a></li>
                    <li><a href="#">금리안내</a></li>
                    <li><a href="#">금리인하요구권 안내</a></li>
                    <li><a href="#">수수료안내</a></li>
                    <li><a href="#">상담안내</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">상담하기</a>
                  <ul>
                    <li><a href="#">고객의 소리</a></li>
                    <li><a href="#">1:1 문의</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">소비자보호</a>
                  <ul>
                    <li><a href="#">소비자보호체계</a></li>
                    <li><a href="#">소비자보호 우수사례</a></li>
                    <li><a href="#">전자민원</a></li>
                    <li><a href="#">소비자보호공시</a></li>
                    <li><a href="#">민원사무편람</a></li>
                    <li><a href="#">금융정보</a></li>
                    <li><a href="#">금융사기 관련공시</a></li>
                    <li><a href="#">보안취약점 신고 안내</a></li>
                  </ul>
                </li>
                <li class="flex-1">
                  <a href="#">증명서</a>
                  <ul>
                    <li><a href="#">나의 증명서 발급내역</a></li>
                    <li><a href="#">증명서 진위 확인</a></li>
                  </ul>
                </li>
                 <li class="flex-1">
                  <a href="#">약관 ・ 서식</a>
                  <ul>
                    <li><a href="#">약관</a></li>
                    <li><a href="#">서식</a></li>
                    <li><a href="#">상품설명서</a></li>
                    <li><a href="#">상품공시</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="flex h-full items-center px-[10px] hover:underline">이벤트</a>
        </li>
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
