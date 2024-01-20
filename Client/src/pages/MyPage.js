import React from "react";
import theme from "../styles/theme";
import styled from "styled-components";
import Header from "../components/myPage/Header";
import ProfileHeader from "../components/myPage/ProfileHeader";
import BasicTabs from "../components/myPage/TabBar";

const MyPage = (props) => {
  return (
    <Container>
      <Header />
      <ProfileHeader />
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  align-items: center;
  background-color: ${theme.colors.background};
  background-color: transparent;
  padding-top: 200px;
  padding-bottom: 100px;
  box-sizing: border-box;
`;

