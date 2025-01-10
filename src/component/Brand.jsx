import React from "react";
import "../styles/brand.css";
const Brdnd = () => {
  return (
    <div>
      <div>
        <div class="module_content">
          <div class="bank_intro">
            <h4 class="tit_intro">
              일상에서 더 쉽게, 더 자주 이용하는
              <br />
              나만의 은행
            </h4>

            <p class="desc_intro">
              카카오뱅크는 사람과 은행의 만남이 더 쉽게, 더 자주 일어나야 한다고
              믿습니다.
              <br />
              사용자 중심의 혁신적인 기술을 통해 일상 속 어떤 순간에서도 유용한
              나만의 은행.
              <br />
              카카오뱅크는 또 하나의 은행이 아닌 '은행의 새로운 시작' 입니다.
            </p>

            {/* <div class="flip_content">
              <div id="flip">
                <div class="item">
                  <img
                    alt=""
                    class="thumb_original"
                    src="/static/images/web/img_1_20200415.jpg"
                  />
                </div>
                <div class="item on hideaway">
                  <img
                    alt=""
                    class="thumb_original"
                    src="/static/images/web/img_2_20180109.jpg"
                  />
                </div>
                <div class="item on">
                  <img
                    alt=""
                    class="thumb_original"
                    src="/static/images/web/img_3_20180109.jpg"
                  />
                </div>
                <div class="item">
                  <img
                    alt=""
                    class="thumb_original"
                    src="/static/images/web/img_4_20180109.jpg"
                  />
                </div>
              </div>
            </div> */}

            <h4 class=" screen_out">카카오뱅크 연혁</h4>
            <div class="bank_history">
              <div class="wrap_history">
                <div class="inner_history">
                  <div class="history_year_row">
                    <span class="year">2022</span>
                    <div class="month_and_content">
                      <div class="month_row">
                        <span class="month">3월</span>
                        <div class="content_wrap">
                          <span class="content">
                            삼성증권 주식계좌개설 신청 서비스 추가
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">2월</span>
                        <div class="content_wrap">
                          <span class="content">주택담보대출 출시</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="history_year_row">
                    <span class="year">2021</span>
                    <div class="month_and_content">
                      <div class="month_row">
                        <span class="month">11월</span>
                        <div class="content_wrap">
                          <span class="content">
                            신한금융투자 주식계좌개설 신청 서비스 추가
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">11월</span>
                        <div class="content_wrap">
                          <span class="content">
                            가명정보 활용 우수사례 경진대회 대상 수상
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">10월</span>
                        <div class="content_wrap">
                          <span class="content">mini 26일저금 출시</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">8월</span>
                        <div class="content_wrap">
                          <span class="content">
                            중신용플러스대출, 중신용비상금대출 출시
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">8월</span>
                        <div class="content_wrap">
                          <span class="content">코스피 상장</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">7월</span>
                        <div class="content_wrap">
                          <span class="content">
                            휴면예금/보험금 찾기 서비스 출시
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">7월</span>
                        <div class="content_wrap">
                          <span class="content">
                            제휴 신용카드 카카오뱅크 롯데카드 출시
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">6월</span>
                        <div class="content_wrap">
                          <span class="content">
                            하나금융투자 주식계좌개설 신청 서비스 추가
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">6월</span>
                        <div class="content_wrap">
                          <span class="content">새로운 신용평가모형 적용</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">1월</span>
                        <div class="content_wrap">
                          <span class="content">
                            아시아머니 '대한민국 최고 은행' 선정
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="history_year_row">
                    <span class="year">2020</span>
                    <div class="month_and_content">
                      <div class="month_row">
                        <span class="month">10월</span>
                        <div class="content_wrap">
                          <span class="content">햇살론 출시</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">10월</span>
                        <div class="content_wrap">
                          <span class="content">카카오뱅크 mini 출시</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">7월</span>
                        <div class="content_wrap">
                          <span class="content">오픈뱅킹 출시</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">6월</span>
                        <div class="content_wrap">
                          <span class="content">
                            KB증권 주식계좌개설 신청 서비스 추가
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">4월</span>
                        <div class="content_wrap">
                          <span class="content">
                            '카카오뱅크 모바일앱 2.0' 오픈
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">4월</span>
                        <div class="content_wrap">
                          <span class="content">'제휴 신용카드' 출시</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">3월</span>
                        <div class="content_wrap">
                          <span class="content">
                            '인공지능(AI)기반 저금통 자동 모으기 기능' 출시
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">2월</span>
                        <div class="content_wrap">
                          <span class="content">
                            전월세보증금 대출 대상(사업소득자) 확대, '청년
                            전월세보증금 대출' 출시
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">2월</span>
                        <div class="content_wrap">
                          <span class="content">
                            NH투자증권 주식계좌개설 신청 서비스 추가
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="history_year_row">
                    <span class="year">2019</span>
                    <div class="month_and_content">
                      <div class="month_row">
                        <span class="month">12월</span>
                        <div class="content_wrap">
                          <span class="content">
                            아시아머니 '최우수 디지털뱅크' 3년 연속 선정
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">12월</span>
                        <div class="content_wrap">
                          <span class="content">'저금통' 출시</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">10월</span>
                        <div class="content_wrap">
                          <span class="content">
                            '금융의 날' 기념 금융혁신 부문 대통령표창 수상
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">10월</span>
                        <div class="content_wrap">
                          <span class="content">
                            '내신용정보 시즌2(신용점수 올리기)' 출시
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">8월</span>
                        <div class="content_wrap">
                          <span class="content">'중신용대출' 출시</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">7월</span>
                        <div class="content_wrap">
                          <span class="content">
                            카카오뱅크 출범 2년(수신 18.6조원・여신 12.0조원
                            기록)
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">7월</span>
                        <div class="content_wrap">
                          <span class="content">1,000만 고객 돌파</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">7월</span>
                        <div class="content_wrap">
                          <span class="content">
                            '2019 대한민국 일자리 으뜸기업' 선정
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">5월</span>
                        <div class="content_wrap">
                          <span class="content">
                            '개인사업자 사잇돌대출' 출시
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">4월</span>
                        <div class="content_wrap">
                          <span class="content">
                            '제휴사 대출 추천' 서비스 출시
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">3월</span>
                        <div class="content_wrap">
                          <span class="content">
                            '주식 계좌 개설 신청' 서비스 출시
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">1월</span>
                        <div class="content_wrap">
                          <span class="content">
                            'WU빠른해외송금' 서비스 출시
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">1월</span>
                        <div class="content_wrap">
                          <span class="content">'사잇돌대출' 출시</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="history_year_row">
                    <span class="year">2018</span>
                    <div class="month_and_content">
                      <div class="month_row">
                        <span class="month">12월</span>
                        <div class="content_wrap">
                          <span class="content">
                            금융감독원 '보이스피싱 예방 감사장' 2년 연속 수상
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">12월</span>
                        <div class="content_wrap">
                          <span class="content">'모임통장 서비스' 출시</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">11월</span>
                        <div class="content_wrap">
                          <span class="content">'내 신용정보' 서비스 시작</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">7월</span>
                        <div class="content_wrap">
                          <span class="content">
                            카카오뱅크 출범 1년 (수신 8.6조 ・ 여신 7조원 기록)
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">6월</span>
                        <div class="content_wrap">
                          <span class="content">'26주적금' 출시</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">3월</span>
                        <div class="content_wrap">
                          <span class="content">
                            아시안뱅커 '최우수 디지털뱅크' 수상
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">2월</span>
                        <div class="content_wrap">
                          <span class="content">
                            'Fast Company' 세계 50대 혁신기업 선정
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">1월</span>
                        <div class="content_wrap">
                          <span class="content">'전월세보증금' 대출 출시</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">1월</span>
                        <div class="content_wrap">
                          <span class="content">500만 고객 돌파</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="history_year_row">
                    <span class="year">2017</span>
                    <div class="month_and_content">
                      <div class="month_row">
                        <span class="month">12월</span>
                        <div class="content_wrap">
                          <span class="content">
                            애플 앱스토어 '올해의 인기 무료앱' 선정
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">12월</span>
                        <div class="content_wrap">
                          <span class="content">
                            구글플레이 '2017 올해를 빛낸 앱' 혁신적인 앱 부문
                            최우수상 수상
                          </span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">7월</span>
                        <div class="content_wrap">
                          <span class="content">100만 고객 돌파</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">7월</span>
                        <div class="content_wrap">
                          <span class="content">카카오뱅크 영업 개시</span>
                        </div>
                      </div>
                      <div class="month_row">
                        <span class="month">4월</span>
                        <div class="content_wrap">
                          <span class="content">은행업 본인가</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="history_year_row">
                    <span class="year">2016</span>
                    <div class="month_and_content">
                      <div class="month_row">
                        <span class="month">1월</span>
                        <div class="content_wrap">
                          <span class="content">
                            한국카카오 주식회사(카카오뱅크 준비법인) 설립
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="history_year_row">
                    <span class="year">2015</span>
                    <div class="month_and_content">
                      <div class="month_row">
                        <span class="month">11월</span>
                        <div class="content_wrap">
                          <span class="content">은행업 예비인가</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="brand_video">
              <h4 class="tit_g tit_video">브랜드 영상</h4>
              <div class="wrap_slide">
                <div class="arrow_btn_wrap">
                  <button
                    class="prev_arrow slick-arrow slick-hidden"
                    id="videoPrevArrow"
                    title="이전보기"
                    aria-disabled="true"
                    tabindex="-1"
                  >
                    <img
                      alt="이전보기"
                      class="disabled_arrow_img arrow_img"
                      src="/static/images/web/brand/btn-arrow-l.png"
                    />
                  </button>
                </div>
                <div
                  class="video_slide slick-initialized slick-slider"
                  id="slider"
                >
                  <div aria-live="polite" class="slick-list draggable">
                    <div
                      class="slick-track"
                      role="listbox"
                      style="opacity: 1; width: 15000px; transform: translate3d(0px, 0px, 0px);"
                    >
                      <div
                        class="slide_item slick-slide slick-current slick-active"
                        tabindex="-1"
                        role="option"
                        aria-describedby="slick-slide20"
                        style=""
                        data-slick-index="0"
                        aria-hidden="false"
                      >
                        <a
                          class="link_slide play_video"
                          data-video-url="https://www.youtube.com/embed/ysPg4-mSIJo"
                          href="javascript:;"
                          tabindex="0"
                        >
                          <img
                            alt="또 한 번 은행을 새롭게"
                            class="thumb_video"
                            src="/static/images/web/brand_movie_14.png"
                          />
                          <span class="img_kabang ico_play">동영상 플레이</span>
                        </a>
                        <div class="video_placeholder">
                          <iframe
                            allowfullscreen=""
                            class="video_iframe"
                            frameborder="0"
                            tabindex="-1"
                            title="광고 볼 시간에. 카카오뱅크 또 한 번 은행을 새롭게 동영상"
                            src=""
                          ></iframe>
                        </div>
                        <strong class="tit_info">
                          #또 한 번 은행을 새롭게
                        </strong>
                        <span class="desc_info">
                          카카오뱅크 주택담보대출 전국 광역시까지 확대
                          <br />
                          주택담보대출의 복잡한 과정을 더 쉽고, 친절하게!
                        </span>
                      </div>
                      <div
                        class="slide_item slick-slide slick-active"
                        tabindex="-1"
                        role="option"
                        aria-describedby="slick-slide21"
                        style=""
                        data-slick-index="1"
                        aria-hidden="false"
                      >
                        <a
                          class="link_slide play_video"
                          data-video-url="https://www.youtube.com/embed/qFfjq1QTm08"
                          href="javascript:;"
                          tabindex="0"
                        >
                          <img
                            alt="세상 모든 모임"
                            class="thumb_video"
                            src="/static/images/web/brand_movie_15.png"
                          />
                          <span class="img_kabang ico_play">동영상 플레이</span>
                        </a>
                        <div class="video_placeholder">
                          <iframe
                            allowfullscreen=""
                            class="video_iframe"
                            frameborder="0"
                            tabindex="-1"
                            title="광고 볼 시간에. 카카오뱅크 세상 모든 모임 동영상"
                            src=""
                          ></iframe>
                        </div>
                        <strong class="tit_info">#세상 모든 모임</strong>
                        <span class="desc_info">
                          친구, 가족, 연인, 동호인끼리
                          <br />
                          요즘엔 다 여기서 모임
                        </span>
                      </div>
                      <div
                        class="slide_item slick-slide slick-active"
                        tabindex="-1"
                        role="option"
                        aria-describedby="slick-slide22"
                        style=""
                        data-slick-index="2"
                        aria-hidden="false"
                      >
                        <a
                          class="link_slide play_video"
                          data-video-url="https://www.youtube.com/embed/c85YxqEJwZE"
                          href="javascript:;"
                          tabindex="0"
                        >
                          <img
                            alt="이미 모두의 은행"
                            class="thumb_video"
                            src="/static/images/web/brand_movie_16.png"
                          />
                          <span class="img_kabang ico_play">동영상 플레이</span>
                        </a>
                        <div class="video_placeholder">
                          <iframe
                            allowfullscreen=""
                            class="video_iframe"
                            frameborder="0"
                            tabindex="-1"
                            title="광고 볼 시간에. 카카오뱅크 이미 모두의 은행 동영상"
                            src=""
                          ></iframe>
                        </div>
                        <strong class="tit_info">#이미 모두의 은행</strong>
                        <span class="desc_info">
                          한 사람, 한 사람을 위해 시작한 은행이
                          <br />더 많은 사람들이 찾는 모두의 은행이 되었습니다.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="arrow_btn_wrap">
                  <button
                    class="next_arrow slick-arrow slick-hidden"
                    id="videoNextArrow"
                    title="다음보기"
                    aria-disabled="true"
                    tabindex="-1"
                  >
                    <img
                      alt="다음보기"
                      class="arrow_img"
                      src="/static/images/web/brand/btn-arrow-r.png"
                    />
                  </button>
                </div>
                <div class="drag_slide" style="display:none;">
                  <div class="bg_bar">
                    <div class="bar_g" style="width:280px;"></div>
                  </div>
                  <span class="img_kabang ico_drag">drag</span>
                </div>
              </div>
            </div> */}

            <div class="bank_bi">
              <h4 class="tit_g">BI소개</h4>
              <span class="img_bi2">B kakaobank</span>
              <dl class="info_bi">
                <dt>Symbol &amp; Wordmark</dt>
                <dd>
                  내가 ( I ) 중심이 되는 은행 (B)을 형상화한 심볼과 고객중심
                  DNA를 반영한 워드마크
                </dd>
              </dl>
              <div class="wrap_btn">
                <a
                  class="btn_down"
                  download=""
                  href="/static/etc/logo/kakaobank.brand.guide.pdf"
                  target="_self"
                >
                  GUIDE 파일 다운로드
                </a>
                <a
                  class="btn_down"
                  download=""
                  href="/static/etc/logo/kakaobank.brand.asset.zip"
                  target="_self"
                >
                  AI 파일 다운로드
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brdnd;
