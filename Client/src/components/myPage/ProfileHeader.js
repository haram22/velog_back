import React from "react";
import theme from "../../styles/theme";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BasicTabs from "./TabBar";

export default function ProfileHeader() {
  return (
    <Row rawSpan={3}>
      <Col className="green"></Col>
      <Col className="red" colSpan={3}>
        <MyInfo height="27%">
          <AccountCircleIcon
            sx={{
              fontSize: "130px",
              color: "white",
              paddingTop: "5px",
              paddingRight: "15px",
              paddingBottom: "20px"
            }}
          />
          <ProfileInfoTextStyle size="26px" weight="700">
            김하람
          </ProfileInfoTextStyle>
        </MyInfo>
        <MyInfo content="end" height="7%" weight="0px" style={{ marginTop: "25px" }}>
          1 팔로우 1 팔로잉
        </MyInfo>
        <MyInfo height="100%" style={{backgroundColor: "transparent", marginTop: "40px"}}>
            <BasicTabs/>
        </MyInfo>
      </Col>
      <Col className="yellow"></Col>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid transparent;
  margin-top: -50px;
  flex-grow: ${(props) => props.rawSpan ?? 1};
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  border: 1px solid transparent;
  flex-grow: ${(props) => props.colSpan ?? 1};
`;

const MyInfo = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${(props) => props.height ?? "25%"};
  justify-content: ${(props) => props.content ?? "start"};
  border-bottom: ${(props) => props.weight ?? "1px"} solid ${theme.colors.divider};
`;

const ProfileInfoTextStyle = styled.div`
  color: ${theme.colors.white};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin-top: 50px;
`;