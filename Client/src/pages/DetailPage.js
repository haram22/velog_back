import theme from "../styles/theme";
import dummyData from "../data/Dummy.json";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/detailPage/Header";
import { useParams } from "react-router-dom";
import Floating from "../components/detailPage/Floating";

export default function DetailPage() {
  const { id } = useParams();
  const detailData = dummyData.find((item) => item.id === parseInt(id));

  if (!detailData) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <Container>
      <Header></Header>
      <RowContentContainer>
        <Floating />
        <ContentContainer>
          <DetailTitleStyle>{detailData.title}</DetailTitleStyle>

          <div style={{ display: "flex", flexDirection: "row"}}>
            <h4>
              {detailData.author} · {detailData.date}
            </h4>
            <Spacer />
            <FollowButton>팔로우</FollowButton>
          </div>
          <div style={{marginTop: "40px"}}>
          {detailData.content}
          </div>
        </ContentContainer>
        <RightContainer>sssddddddddddddsssssssssss</RightContainer>
      </RowContentContainer>
    </Container>
  );
}

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

const ContentContainer = styled.div`
  max-width: 760px;
  max-height: 100%;
  min-width: 50%;
  align-items: start;
  display: flex;
  flex-direction: column;
`;

const RowContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  width: 100%;
  height: 100%;
  margin-top: -300px;
  justify-content: space-between;
  align-items: center;
`;

const DetailTitleStyle = styled.h1`
  color: ${theme.colors.white};
  font-size: 48px;
  margin-bottom: 32px;
  max-width: 760px;
  width: 90%;
  margin-top: 150px;
  min-width: 760px;
`;

const RightContainer = styled.div`
  max-width: 300px;
  min-width: 200px;
  height: 145px;
  margin-top: 200px;
  color: white;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.green};
`;

const FollowButton = styled.button`
  text-align: center;
  background-color: ${theme.colors.background};
  color: ${theme.colors.primary};
  border-radius: 20px;
  border-color: ${theme.colors.primary};
  border-width: 1px;
  border-style: solid;
  margin-top: 5px;
  margin-left: 20px;
  margin-top: 13px;
  width: 95px;
  height: 32px;
  font-size: 16px;
  font-weight: 700;
  margin-left: 500px;
  &:hover {
    cursor: pointer;
  }
`;

const Spacer = () => <div style={{ flexGrow: 1 }} />;
