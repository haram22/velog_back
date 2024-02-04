import theme from "../styles/theme";
import dummyData from "../data/Dummy.json";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/detailPage/Header";
import { useParams } from "react-router-dom";
import Floating from "../components/detailPage/Floating";
import AuthorInfo from "../components/detailPage/AuthorInfo";
import Comment from "../components/detailPage/Comment";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  // const detailData = dummyData.find((item) => item.id === parseInt(id));

  const goToEditPage = (id) => {
    navigate(`/PostPage/${id}`);
  };

  const [detailData, setData] = useState([]); // 데이터를 저장할 상태

  useEffect(() => {
    // 서버에서 데이터를 가져오는 비동기 요청
    axios.get(`http://localhost:8080/api/articles/get/${id}`)
      .then((response) => {
        // 가져온 데이터를 상태(State)에 저장
        setData(response.data);
        
      })
      .catch((error) => {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      });
  }, []); 

  function DeleteButtonClicked() {
    axios.delete(`http://localhost:8080/api/articles/delete/${id}`, {
        }).then(function (response) {
          navigate("/Home");
        }).catch(function (error) {
            console.log(error);
        });
  }

  return (
    <Container>
      <Header></Header>
      <RowContentContainer>
        <Floating />
        <ContentContainer>
          <DetailTitleStyle>{detailData.title}</DetailTitleStyle>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <h4>
              {/* {detailData.author} */}
               · {detailData.createdAt}
            </h4>
            <Spacer />
            {/* <FollowButton>팔로우</FollowButton> */}
            <TextButton>통계</TextButton>
            <TextButton onClick={() => goToEditPage(id)}>수정</TextButton>
            <TextButton onClick={DeleteButtonClicked}>삭제</TextButton>
          </div>
          <ImageContainer>
            {/* <img src={detailData.imageUrl} alt={detailData.title} /> */}
          </ImageContainer>
          <div style={{ marginTop: "40px" }}>{detailData.content}</div>
          <AuthorInfo />
          <Comment />
        </ContentContainer>
        <RightContainer></RightContainer>
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
  margin-top: -150px;
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

const TextButton = styled.button`
  text-align: center;
  background-color: ${theme.colors.background};
  color: ${theme.colors.unSelected};
  margin-top: 13px;
  border-color: transparent;
  height: 32px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.white};
  }
`;
const Spacer = () => <div style={{ flexGrow: 1, marginRight: "450px" }} />;

const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 95%;
  }
`;