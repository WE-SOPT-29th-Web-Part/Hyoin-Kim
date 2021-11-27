import React from "react";
import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";
import profileImg from "../../assets/images/hyoinProfile.jpg";

const Profile = () => {
  return (
    <StyledRoot>
      <StyledProfile>
        <img src={profileImg} alt="" />
        <div>
          <h3>김효인</h3>
          <p>내가 보려고 만든 개인 블로그</p>
        </div>
      </StyledProfile>
      <GithubIcon />
      <HomeIcon />
      <MailIcon />
    </StyledRoot>
  );
};

export default Profile;

const StyledRoot = styled.div`
  margin: auto;
  width: 100%;
  margin-top: 100px;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 120px;
    height: 120px;
    border-radius: 100%;
  }
`;
