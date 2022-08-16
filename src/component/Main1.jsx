import React from 'react';
import "../styles/Main.css";
const Main1 = () => {
    return (
        <div className="Main1">
        <section class="section-1">
        <div class="con-2 mx-auto h-[884px]"></div>
        <div class="background-line w-full h-[720px]"></div>
        <div class="main-content">
            <div class="tit-main text-[47px] font-bold leading-[1.4]">
                이미 모두의 은행
                <br />
                지금은 카카오뱅크
                
            </div>
            <div class="tit-sub mt-[20px]  leading-[1.95] opacity-[0.7]">
                한 사람, 한 사람을 위해 시작한 은행이
                <br />
                더 많은 사람들이 찾는 모두의 은행이 되었습니다.
            </div>
            <div class="tit-sub mt-[20px] leading-[1.95] opacity-[0.7]">
                보내고, 받고, 모으고, 쓰는
                <br />
                당신의 모든 일이 바뀌고 있습니다.
            </div>    
                <ul class="link-store flex mt-[50px]">
                    <li>
                        <a href="#" class="flex items-center justify-center w-[178px] h-[56px] bg-white rounded-[12px] ml-[5px] hover:underline"><span class="img-kabang"></span>Google Play</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center w-[178px] h-[56px] bg-white rounded-[12px] ml-[10px] hover:underline"><span class="img-kabang ico-app"></span>App Store</a>
                    </li>
                </ul></div>
        </section>
        </div>
    );
};

export default Main1;