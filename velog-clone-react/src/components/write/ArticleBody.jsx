import React from "react";
import styled from "styled-components";

const ArticleBody = () => {
  return <StyledTextarea placeholder="블로그에 적을 스토리를 적어주세요!"></StyledTextarea>;
};

export default ArticleBody;

const StyledTextarea = styled.textarea`
  width: 50%;
  font-size: 20px;
  resize: none;
  border: none;

  &:focus {
    outline: none;
  }
`;
