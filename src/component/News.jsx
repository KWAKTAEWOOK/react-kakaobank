import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../styles/News.css";
import Newstext from "./Newstext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const News = ({ onInsert }) => {
  const [Newss, setNewss] = useState([]);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [bodytext, setbodytext] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };
  // const onSubmoit = (e) => {
  //   e.preventDefault(); //동작때마다 새로고침 중지
  //   setValue(""); //입력완료하면 비워줘야하니까 값삭제
  //   onInsert(value); //Newss 배열에 추가해주는 역할
  // };
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/Newss",
          method: "GET",
        });

        console.log(data.data);
        setNewss(data.data);
        setTitle(data.data.titel);
        setbodytext(data.data.bodytext);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);
  //const newss ;
  if (error) {
    return <>에러: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  function News1({ news1 }) {
    return (
      <tr>
        <td>{news1.id}</td>
        <td class="info_subject">
          <Link to={`/News/${news1.id}`}>{news1.title}</Link>
        </td>
        <td>{news1.reg_date.substring(0, 10)}</td>
      </tr>
    );
  }

  return (
    <div>
      <section class="con">
        <div className="map-manu">
          <h3 class="tit_cont tit_br">공지사항</h3>
          <div class="module_content" />
          <div class="bank_location">
            <table class="tbl_kabang">
              <thead className="top-cell">
                <tr>
                  <th>No</th>
                  <th>제목</th>
                  <th>등록일</th>
                </tr>
              </thead>
              <tbody className="body-call">
                {Newss.slice(offset, offset + limit).map((news1, index) => (
                  <News1 news1={news1} key={index} />
                ))}
              </tbody>
            </table>
            <div className="editcell">
              <footer>
                {/*페이지 네이션버튼*/}
                <Pagination
                  total={Newss.length}
                  limit={limit}
                  page={page}
                  setPage={setPage}
                />
              </footer>

              <Link to="/NewPost" className="NewPost">
                게시글 추가
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
