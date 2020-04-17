import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

// STYLE
const NewsListBlock = styled.div`
  box-sizing: border-box;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  padding-bottom: 3rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

function NewsList() {
  const [articles, setArticles] = useState(null); // API 로 받아오는 값
  const [loading, setLoading] = useState(false); // Loading 상태 관리

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://newsapi.org/v2/top-headlines?country=kr&apiKey=fa70351bae8948279923fab34d45d5aa"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기(로딩) 중일 때
  if (loading) {
    return <div>Loading ...</div>;
  }
  // 아직 articles 값이 설정되지 않았을 때 (map 함수 사용하기 전 검사)
  if (!articles) {
    return null;
  }

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
