import "../styles/Newstext.css";
import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { data } from "autoprefixer";

const Newstext = () => {
  const [Newss, setNewss] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `http://localhost:4000/Newss/${id}`,
          method: "GET",
        });

        //console.log(data.data);
        setNewss(data.data);

        setIsLoading(false);
      } catch (e) {}
    };
    getData();
  }, []);
  if (error) {
    return <>에러: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }
  const onRemove = async (id) => {
    try {
      const data = await axios({
        url: `http://localhost:4000/Newss/${id}`,
        method: "DELETE",
      });
      setNewss(data.data);
    } catch (e) {
      setError(e);
    }
  };

  function News2({ news2 }) {
    return (
      <>
        <div class="view_tit">
          <strong class="tit_board">{news2.title}</strong>
          <span class="txt_date">{news2.reg_date}</span>
        </div>
        <div class="view_cont">{news2.bodytext}</div>
      </>
    );
  }

  return (
    <div>
      <section class="con">
        <div className="map-manu">
          <h3 class="tit_cont tit_br">공지사항</h3>
          <div class="module_content" />
          <div class="bank_location">
            <div class="board_view">
              <div>
                <div class="view_tit">
                  <strong class="tit_board">{Newss.title}</strong>
                  <span class="txt_date">{Newss.reg_date}</span>
                </div>
                <div class="view_cont1">
                  {Newss.bodytext.split("\n").map((line, index) => {
                    return (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    );
                  })}
                </div>
                {/* {Newss.map((news2) => (
                  <News2 news2={news2} key={news2.id} />
                ))} */}
              </div>
            </div>
          </div>
          <Link to="/News" className="list">
            목록
          </Link>
          <Link to={`/News/${id}/edit`} className="edit">
            수정하기
          </Link>

          <button
            className="remove"
            onClick={() => {
              if (window.confirm("삭제하시겠습니까?") == true) {
                onRemove(id);
                history.goBack();
                console.log("삭제되었습니다.");
              } else {
                console.log("취소되었습니다");
              }
            }}
          >
            삭제하기
          </button>
        </div>
      </section>
    </div>
  );
};
export default Newstext;
