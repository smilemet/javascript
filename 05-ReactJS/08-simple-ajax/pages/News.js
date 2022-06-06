// 05-stylesheet 단원의 '/components/NewsList.js'를 이 단원에 복사
import React from "react";
import axios from "axios";
import styled from "styled-components";
import NewsItem from "../components/NewsItem";
import Spinner from "../components/Spinner";

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  margin-bottom: 30px;
`;

const NewsList = () => {
  // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [newsList, setNewsList] = React.useState([]);
  // 현재 ajax가 데이터를 로딩중인지 의미하는 상태값
  const [loading, setLoading] = React.useState(false);

  // 페이지가 처음 열렸을 때 실행할 hook
  React.useEffect(() => {
    // Ajax 로딩 시작을 알림
    setLoading(true);

    // 로딩을 확인하기 위해 임의로 딜레이 적용
    setTimeout(() => {
      (async () => {
        // ajax 처리 결과가 저장될 변수
        let json = null;

        try {
          const response = await axios.get("http://localhost:3001/news");
          json = response.data;
        } catch (e) {
          console.error(e);
          alert("Ajax 연동 실패");
        } finally {
          // Ajax 로딩 종료를 알림
          setLoading(false);
        }

        // Ajax 연동결과가 있다면 그 결과를 상태값에 적용함
        if (json !== null) {
          setNewsList(json);
        }
      })();
    }, 500);
  }, []);

  return (
    <div>
      <Spinner visible={loading} />
      <ListContainer>
        {newsList.map((v, i) => (
          <NewsItem key={i} item={v} />
        ))}
      </ListContainer>
    </div>
  );
};

export default NewsList;
