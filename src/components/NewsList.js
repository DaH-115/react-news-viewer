import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

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

function NewsList({ category }) {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=fa70351bae8948279923fab34d45d5aa`
    );
  }, [category]);

  // 대기(로딩) 중일 때
  if (loading) {
    return <div>Loading ...</div>;
  }
  // 아직 articles 값이 설정되지 않았을 때 (map 함수 사용하기 전 검사)
  if (!response) {
    return null;
  }

  if (error) {
    return <NewsList>에러 발생!</NewsList>;
  }

  const { articles } = response.data; // usePromise 의 resolved

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
