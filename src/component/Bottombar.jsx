import React from "react";
import "../styles/Bottombar.css";

const Bottombar = () => {
  return (
    <div>
      <div class="inner_foot">
        <footer class="bottom-bar con-min-width1">
          <div class="con">
            <div class="box-1">
              <nav class="menu-1">
                <ul class="flex flex-wrap gap-y-[10px]">
                  <li>
                    <a href="#">모바일뱅킹 서비스 이용약관</a>
                    <span class="txt_bar" />
                  </li>
                  <li>
                    <a href="#">전자금융거래 기본약관</a>
                    <span class="txt_bar" />
                  </li>
                  <li>
                    <a href="#" class="text-black font-bold">
                      위치기반 서비스 이용약관
                    </a>
                    <span class="txt_bar" />
                  </li>
                  <li>
                    <a href="#" class="text-black font-bold">
                      개인정보처리방침
                    </a>
                    <span class="txt_bar" />
                  </li>
                  <li>
                    <a href="#" class="text-black font-bold">
                      전자민원접수
                    </a>
                    <span class="txt_bar" />
                  </li>
                  <li>
                    <a href="#">보호금융상품등록부</a>
                    <span class="txt_bar" />
                  </li>
                  <li>
                    <a href="#">상품공시실</a>
                    <span class="txt_bar" />
                  </li>
                  <li>
                    <a href="#">경영공시 </a>
                    <span class="txt_bar" />
                  </li>
                  <li>
                    <a href="#">공지사항 </a>
                    <span class="txt_bar" />
                  </li>
                  <li>
                    <a href="#">전자서명인증업무준칙</a>
                    <span class="txt_bar" />
                  </li>
                  <li>
                    <a href="#">카카오뱅크 인증서 서비스 이용약관</a>
                    <span class="txt_bar" />
                  </li>
                  <li>
                    <a href="#">카카오뱅크 인증서 서비스 개인정보처리방침</a>
                    <span class="txt_bar" />
                  </li>
                </ul>
              </nav>
            </div>
            <div class="box-2">
              <span class="txt-busi">
                (주)카카오뱅크∙윤호영∙사업자번호 375-88-00197
              </span>
              <span class="txt-tel-1 text-black">대표전화 1599-3333</span>
              <span class="txt-tel-2">(해외 +82-2-6420-3333)</span>
              <div class="copyright">
                Copyright © KakaoBank Corp. All rights reserved.
              </div>
            </div>
            <div class="box-3 flex">
              <a href="#" class="auth-mark flex items-center">
                <img src="/images/webaccessibility.png" alt="" />
                <span>웹 접근성 품질인증</span>
              </a>
              <nav class="menu-box-2 ml-auto mt-[5px]">
                <ul class="flex">
                  <li>
                    <a href="#" class="block px-[5px]">
                      <span class="block ico-2 ico-2-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-[5px]">
                      <span class="block ico-2 ico-2-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-[5px]">
                      <span class="block ico-2 ico-2-youtube"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-[5px]">
                      <span class="block ico-2 ico-2-brunch"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Bottombar;
