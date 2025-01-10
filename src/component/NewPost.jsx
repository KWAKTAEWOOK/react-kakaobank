import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../styles/NewPost.css";

const NewPost = () => {
  const [Newss, setNewss] = useState([]);
  const [title, settitle] = useState("");
  const [bodytext, setbodytext] = useState("");
  const [insertToggle, setInsertToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();
  const onChange = (e) => {
    setbodytext(e.target.value);
  };
  const onChange1 = (e) => {
    settitle(e.target.value);
  };
  const onSubmoit = (e) => {
    e.preventDefault(); //동작때마다 새로고침 중지
    if (window.confirm("생성하시겠습니까?") == true) {
      onInsert(title, bodytext); // 포스트로 데이터를 보냄
      settitle(""); //입력완료하면 비워줘야하니까 값삭제
      setbodytext("");
      history.goBack();
      console.log("완료되었습니다.");
    } else {
      // false는 취소버튼을 눌렀을 때, 취소됨
      console.log("취소되었습니다");
    }
  };
  const onInsert = async (title, bodytext) => {
    try {
      const data = await axios({
        url: `http://localhost:4000/Newss`,
        method: "POST",
        data: { title, bodytext },
      });
      setNewss(data.data);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      <section class="con">
        <div className="map-manu">
          <h3 class="tit_cont tit_br">생성 페이지</h3>
          <div class="module_content" />
          <form onSubmit={onSubmoit}>
            <div className="NewsInsert">
              <input
                className="title-box"
                onChange={onChange} //값을바꿔주는함수
                value={bodytext} //값 (벨류)
                placeholder="제목을 입력하세요" //입력상자에 출력하는 단어
              />
            </div>

            <div className="NewsInsert-body">
              <textarea
                className="body-text-box"
                onChange={onChange1} //값을바꿔주는함수
                value={title} //값 (벨류)
                placeholder="내용을 입력하세요" //입력상자에 출력하는 단어
              />
            </div>
            <div className="button-box">
              <button className="post" type="submit">
                게시글 생성
              </button>
              <button className="listbut">
                <Link to="/News" className="listpost">
                  목록
                </Link>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewPost;
