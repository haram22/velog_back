import React from "react";
import theme from "../../styles/theme";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import dummyData from "../../data/Dummy.json";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MyDataTab() {
  const navigate = useNavigate();
  const { id } = useParams();

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Container>
      {dummyData.map((item, index) => (
        <MyListContainer key={index} onClick={() => goToDetailPage(item.id)}>
          <TitleStyle size="20px" style={{ marginBottom: "24px" }}>
            {item.title}
          </TitleStyle>
          <ContentStyle style={{ marginBottom: "8px" }}>
            {item.content}
          </ContentStyle>
          <ContentContainer style={{marginBottom: "50px"}}>
            <DateStyle>
              {item.date} · {item.commentsCount}개의 댓글 ·
              <FavoriteIcon
                sx={{
                  fontSize: "12px",
                  color: "white",
                  paddingLeft: "10px",
                  paddingRight: "5px",
                }}
              />
              {item.likesCount}
            </DateStyle>
          </ContentContainer>
        </MyListContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const MyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: transparent;
  margin-top: 60px;
  border-radius: 5px;
  color: white;
  justify-content: start;
  border-bottom: ${(props) => props.weight ?? "1px"} solid ${theme.colors.divider};
  flex: 0 0 319.96px; /* flex-grow, flex-shrink를 0으로, flex-basis를 340px로 설정 */
    &:hover {
        cursor: pointer;
    }
`;

const ContentContainer = styled.div`
  width: 287.95px;
`;

const TitleStyle = styled.div`
  width: 100%;
  max-width: 100%;
  font-size: ${(props) => props.size || "24px"};
  font-weight: ${(props) => props.weight || "700"};
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  color: ${theme.colors.white};
`;

const ContentStyle = styled.div`
  width: 100%;
  height: 63px;
  margin-bottom: 24px;
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => props.weight || "500"};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const DateStyle = styled.div`
  width: 287.95px;
  font-size: ${(props) => props.size || "12px"};
  font-weight: ${(props) => props.weight || "500"};
`;
