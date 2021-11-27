import React from "react";
import styled from "styled-components";

const ArticleFooter = () => {
  return (
    <StyledFooter>
      <div>나가기</div>
      <StyledButton>임시저장</StyledButton>
      <StyledButton>출간하기</StyledButton>
    </StyledFooter>
  );
};

export default ArticleFooter;

const StyledFooter = styled.div`
  display: flex;
`;

const StyledButton = styled.button``;
