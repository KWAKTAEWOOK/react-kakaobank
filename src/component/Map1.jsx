/* global kakao */
import React from "react";
import Bottombar from "./Bottombar";
import Topbar from "./Topbar";
import "../styles/map.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";


const Map1 = () => {
  return (
    <>
      <section class="con">
        <div className="map-manu">
          <h3 class="tit_cont tit_br">오시는 길</h3>
          <div class="module_content" />
          <div class="bank_location">
            <strong class="tit_location">판교오피스</strong>
            <ul class="list_location">
              <li>
                <strong class="tit_info">주소</strong>
                경기도 성남시 분당구 분당내곡로 131, 11층(백현동, 판교테크원)
              </li>
              <li>
                <strong class="tit_info">전화 </strong> 02-6288-6000
              </li>
            </ul>
            <Map
              center={{ lat: 37.395437, lng: 127.1121248 }}
              style={{ width: "100%px", height: "350px" }}
            >
              <MapMarker position={{ lat: 37.395437, lng: 127.1121248 }}>
                <div className="label" style={{ color: "#000" }}>
                  <span className="left"></span>
                  <span className="center">카카오 뱅크</span>
                  <span className="right"></span>
                </div>
              </MapMarker>
            </Map>
            <strong class="tit_location tit_location2">
              서울오피스&nbsp;(고객센터)
            </strong>
            <ul class="list_location">
              <li>
                <strong class="tit_info">주소 </strong> 서울특별시 영등포구
                여의대로 108 파크원 타워 2 35층
              </li>
              <li>
                <strong class="tit_info">전화 </strong> 1599-3333
              </li>
            </ul>
            <Map
              center={{ lat: 37.527037, lng: 126.927805 }}
              style={{ width: "100%px", height: "350px" }}
            >
              <MapMarker position={{ lat: 37.527037, lng: 126.927805 }}>
              {/* <div className="label" style={{ color: "#000" }}> */}

                <div className="label" >
                  <span className="left"></span>
                  <span className="center">카카오뱅크 고객센터</span>
                  <span className="right"></span>
                </div>
              </MapMarker>
            </Map>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map1;
