import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const ArticleTitle = () => {
  return <StyledTitle placeholder="제목을 입력하세요" />;
};

export default ArticleTitle;

const StyledTitle = styled(TextareaAutosize)`
  width: 100%;
  font-size: 40px;
  white-space: pre-wrap; //연속 공백 유지
  height: 30px;
  resize: none;
  border: none;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;
