import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../styles/edit.css";
import { render } from "@testing-library/react";

const Edit = ({}) => {
  const [Newss, setNewss] = useState([]);
  const [title, settitle] = useState("");
  const [bodytext, setbodytext] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { id } = useParams();
  const goback = () => {
    history.goBack();
  };
  const onChange = (e) => {
    setbodytext(e.target.value);
  };
  const onChange1 = (e) => {
    settitle(e.target.value);
  };
  const onSubmoit = (e) => {
    e.preventDefault(); //동작때마다 새로고침 중지
    if (window.confirm("수정하시겠습니까?") == true) {
      settitle(""); //입력완료하면 비워줘야하니까 값삭제
      setbodytext("");
      history.goBack();
      onUpdate(title, bodytext);
      console.log("완료되었습니다.");
    } else {
      // false는 취소버튼을 눌렀을 때, 취소됨
      console.log("취소되었습니다");
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `http://localhost:4000/Newss/${id}`,
          method: "GET",
        });

        // console.log(data.data);
        setNewss(data.data);
        settitle(data.data.title);
        setbodytext(data.data.bodytext);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getData();
    // onChange1(e);
    // onChange(e);
  }, []);
  const onUpdate = async (title, bodytext) => {
    const data = await axios({
      url: `http://localhost:4000/Newss/${id}`,
      method: "PATCH",
      data: { bodytext, title },
    });
    this.setNewss(data.data); //삼항연산자);
  };

  // console.log(title);
  // console.log(Newss.title);
  // console.log(bodytext);
  // console.log(Newss.bodytext);

  return (
    <>
      <section class="con">
        <div className="map-manu">
          <h3 class="tit_cont tit_br">수정 페이지</h3>
          <div class="module_content" />
          <form onSubmit={onSubmoit}>
            <div className="NewsInsert">
              <input
                className="title-box"
                onChange={onChange1} //값을바꿔주는함수
                value={title} //값 (벨류)
                required
                placeholder="제목을 입력하세요" //입력상자에 출력하는 단어
              />
            </div>

            <div className="NewsInsert-body">
              <textarea
                className="body-text-box"
                onChange={onChange}
                value={bodytext}
                required
                placeholder="내용을 입력하세요"
              />
            </div>
            <div className="button-box">
              <button className="post" type="submit">
                게시글 수정
              </button>
              <button className="listbut">
                <Link to={`/News/${id}`} className="listpost">
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
export default Edit;
