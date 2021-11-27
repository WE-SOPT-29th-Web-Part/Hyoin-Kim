import React from "react";
import styled from "styled-components";

const ArticleTag = ({ tags }) => {
  const handleSubmit = (e) => {
    if (e.key === "," || e.key === "Enter") {
    }
  };
  return (
    <StyledTag>
      {/* {tags &&
        tags.map((tag) => (
          <StyledTag key={tag} onClick={(e) => handleArrDataRemove("tags", e.target.innerText)}></StyledTag>
        ))} */}
      <StyledInput type="text" placeholder="태그를 입력하세요" onKeyPress={handleSubmit} />
    </StyledTag>
  );
};

export default ArticleTag;

const StyledTag = styled.div``;

const StyledInput = styled.input`
  width: 50%;
  font-size: 20px;
  margin-top: 20px;
`;
