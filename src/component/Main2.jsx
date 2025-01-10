import React from "react";
import "../styles/Main2.css";
import Scroll from "./Scroll";

export default function Main2() {
  const img = {
    1: Scroll("left", 1.2, 0),
    2: Scroll("up", 1.2, 0),
  };
  return (
    <div className="Main2">
      <section class="section">
        <div class="top-banner-box-2 top-banner-box-type-1 con">
          <div>
            <div class="img-box">
              <img src="/images/main-withdrawal.png" alt="" />
            </div>
          </div>
          <div>
            <div class="txt-box">
              <h1>
                모바일로 더 손쉬운
                <br />
                계좌개설, 간편한 이체
              </h1>
              <div class="des">
                인증서, OTP 없이 계좌 개설이 간편합니다.
                <br />
                여러 건의 이체도 몇 번의 터치로 손쉽게 보낼 수 있습니다.
              </div>
              <div class="btn-box">
                <a href="#">
                  <span>카카오뱅크 입출금통장</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="top-baneer-box-type-1__between-pad"></div>
        <div class="top-banner-box-3 top-banner-box-type-1 con">
          <div>
            <div class="txt-box">
              <h1>
                우대조건 없이
                <br />
                합리적인 예금과 적금
              </h1>
              <div class="des">
                기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요?
                <br />
                카카오뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나
                편리하고 합리적입니다.
              </div>
              <div class="btn-box">
                <a href="#">
                  <span>정기예금</span>
                </a>
                <a href="#">
                  <span>자유적금</span>
                </a>
              </div>
              <div className="img-box-1">
                <img src="/images/main-savings-money.png" alt="" />
              </div>
            </div>
            <div>
              <div class="img-box">
                <img {...img[1]} src="/images/main-savings.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="top-baneer-box-type-1__between-pad"></div>
        <div class="top-banner-box-4 top-banner-box-type-1 con">
          <div>
            <div class="img-box">
              <img src="/images/main-moim.png" alt="" />
            </div>
          </div>
          <div>
            <div class="txt-box">
              <h1>
                함께 쓰고 같이 보는
                <br />
                모임통장
              </h1>
              <div class="des">
                카카오톡 친구를 바로 모임통장으로 초대하고
                <br />
                친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.
                <br />
                재미있는 메시지 카드로 회비 입금 요청도 해보세요.
              </div>
              <div class="btn-box">
                <a href="#">
                  <span>모임통장</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="top-baneer-box-type-1__between-pad"></div>
        <div class="top-banner-box-5 top-banner-box-type-1 con">
          <div>
            <div class="txt-box">
              <h1>
                함께 도전해서
                <br />
                재미있는 26주적금
              </h1>
              <div class="des">
                26주동안 변화하는 재미에 빠져있는 사이
                <br />
                어느덧 만기 달성 경험을 맛보게 됩니다.
              </div>
              <div class="btn-box">
                <a href="#">
                  {" "}
                  <span>26주적금</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="img-box">
              <img src="/images/적금캐릭터.png" alt="" />
            </div>
          </div>
        </div>
        <div class="top-baneer-box-type-1__between-pad"></div>
        <div class="top-banner-box-6-wrap con-min-width">
          <div class="top-banner-box-6 top-banner-box-type-1 con">
            <div>
              <div class="img-box">
                <img {...img[2]} src="/images/메인카드.png" alt="" />
              </div>
            </div>
            <div>
              <div class="txt-box">
                <h1>
                  해외계좌송금과
                  <br />
                  WU빠른해외송금을
                  <br />더 쉽고, 저렴하게
                </h1>
                <div class="des">
                  해외계좌송금이 가능한 22개국을 포함하여
                  <br />
                  전세계 200여개국으로
                  <br /> WU빠른해외송금이 가능합니다.
                </div>
                <div class="btn-box">
                  <a href="#">
                    <span>해외 송금</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
