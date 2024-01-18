import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import theme from "../../styles/theme";
import dummyData from "../../data/Dummy.json";
import ShareIcon from '@mui/icons-material/Share';
import { useParams } from "react-router-dom";

export default function Floating() {
  const { id } = useParams();
  const detailData = dummyData.find((item) => item.id === parseInt(id));

  return (
    <FloatingContainer>
      <CircleContainer style={{marginBottom: "7px"}}>
        <FavoriteIcon
          sx={{
            fontSize: "30px",
            color: "white",
            paddingTop: "10px",
          }}
        />
      </CircleContainer>
      {detailData.likesCount}
      <CircleContainer style={{marginTop: "15px"}}>
      <ShareIcon
          sx={{
            fontSize: "30px",
            color: "white",
            paddingTop: "10px",
          }}
        />
      </CircleContainer>
    </FloatingContainer>
  );
}

const FloatingContainer = styled.div`
  width: 55px;
  height: 145px;
  color: white;
  border-radius: 40px;
  padding: 8px;
  border-width: 0.1;
  border-color: ${theme.colors.divider};
  border-style: solid;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.secondBlack};
  margin-top: 480px;
  margin-left: 200px;
  margin-right: -10px;
`;

const CircleContainer = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border-width: 0.1;
  border-color: ${theme.colors.divider};
  border-style: solid;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    border-color: ${theme.colors.white};
  }
`;
