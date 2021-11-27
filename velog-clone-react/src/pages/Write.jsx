import React from "react";
import styled from "styled-components";
import ArticleFooter from "../components/write/ArticleFooter";
import ArticleTag from "../components/write/ArticleTag";
import ArticleTitle from "../components/write/ArticleTitle";
import ArticleBody from "../components/write/ArticleBody";

const Write = () => {
  //   const [articleData, setArticleData] = useState({
  //     tags: [],
  //   });
  return (
    <StyledRoot>
      <StyledTop>
        <ArticleTitle />
        <StyledMiddleBlock />
        <ArticleTag />
      </StyledTop>
      <StyledBottom>
        <ArticleBody />
        <ArticleFooter />
      </StyledBottom>
    </StyledRoot>
  );
};

export default Write;

const StyledRoot = styled.div``;
const StyledTop = styled.div`
  margin: 20px;
  width: 50%;
`;
const StyledMiddleBlock = styled.div`
  width: 64px;
  height: 6px;
  background-color: gray;
`;

const StyledBottom = styled.div`
  margin: 20px;
`;
