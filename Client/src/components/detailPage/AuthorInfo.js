import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import theme from "../../styles/theme";
import { useParams } from "react-router-dom";
import dummyData from "../../data/Dummy.json";

export default function AuthorInfo() {
  const { id } = useParams();
  const detailData = dummyData.find((item) => item.id === parseInt(id));

  return (
    <MyInfo height="27%">
      <AccountCircleIcon
        sx={{
          fontSize: "130px",
          color: "white",
          paddingTop: "5px",
          paddingRight: "15px",
          paddingBottom: "20px",
        }}
      />
      <ProfileInfoTextStyle size="26px" weight="700">
        {detailData.author}
      </ProfileInfoTextStyle>
    </MyInfo>
  );
}

const MyInfo = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 250px;
  height: ${(props) => props.height ?? "25%"};
  justify-content: ${(props) => props.content ?? "start"};
  border-bottom: ${(props) => props.weight ?? "1px"} solid
    ${theme.colors.divider};
`;

const ProfileInfoTextStyle = styled.div`
  color: ${theme.colors.white};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin-top: 50px;
`;
