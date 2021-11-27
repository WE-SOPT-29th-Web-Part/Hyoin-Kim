import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ArrowDropDownImage } from "../../assets/icons/arrow_drop_down.svg";

const Header = () => {
  return (
    <StyledRoot>
      <span>velog</span>
      <StyledRight>
        <SearchIcon />
        <Link to="/write">
          <button>새 글 작성</button>
        </Link>
        <ArrowDropDownImage />
      </StyledRight>
    </StyledRoot>
  );
};

export default Header;

const StyledRoot = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: auto;
  height: 64px;
  span {
    font-size: 30px;
    font-weight: bold;
  }
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 15px;
    cursor: pointer;
  }
  button {
    border-radius: 30px;
    width: 100px;
    height: 35px;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
