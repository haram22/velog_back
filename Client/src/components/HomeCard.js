import styled from "styled-components";
import theme from "../styles/theme";
import dummyData from "../data/Dummy.json";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function HomeCard() {
  return (
    <CardsContainer>
      {dummyData.map((item, index) => (
        <HomeCardContainer key={index}>
          <ImageContainer>
            <img src={item.imageUrl} alt={item.title} />
          </ImageContainer>
          <ContentContainer>
            <TitleStyle size="16px">{item.title}</TitleStyle>
            <ContentStyle>{item.content}</ContentStyle>
            <DateStyle>
              {item.date} · {item.commentsCount}개의 댓글
            </DateStyle>
          </ContentContainer>
          <BottomContainer>
            <p>by {item.author}</p>
            <Spacer />
            <FavoriteIcon
              sx={{
                fontSize: "12px",
                color: "white",
                paddingTop: "13px",
                paddingRight: "10px",
              }}
            />
            <p>{item.likesCount}</p>
          </BottomContainer>
        </HomeCardContainer>
      ))}
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* 카드 사이의 간격 */
  justify-content: flex-start; /* 카드를 왼쪽 정렬 */
  align-items: flex-start; /* 카드를 상단 정렬 */

  > div {
    transition: transform 0.5s; /* 부드러운 변환 효과 */
    &:hover {
      transform: translateY(-13px);
    }
  }
`;

const HomeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 319.96px;
  height: 376.99px;
  background-color: ${theme.colors.secondBlack};
  margin-top: 30px;
  border-radius: 5px;
  color: white;
  justify-content: start;
  flex: 0 0 319.96px; /* flex-grow, flex-shrink를 0으로, flex-basis를 340px로 설정 */
`;

const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 166.99px;
  }
`;

const ContentContainer = styled.div`
  width: 287.95px;
  padding: 16px;
`;

const TitleStyle = styled.div`
  width: 287.95px;
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "700"};
  margin-bottom: 4px;
`;

const ContentStyle = styled.div`
  width: 287.95px;
  height: 63px;
  margin-bottom: 24px;
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => props.weight || "500"};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DateStyle = styled.div`
  width: 287.95px;
  font-size: ${(props) => props.size || "12px"};
  font-weight: ${(props) => props.weight || "500"};
`;

const BottomContainer = styled.div`
  width: 287.95px;
  display: flex;
  flex-direction: row;
  padding: 5px 16px;
  font-size: 12px;
  border-top: 1px solid ${theme.colors.divider};
`;

const Spacer = () => <div style={{ flexGrow: 1 }} />;
