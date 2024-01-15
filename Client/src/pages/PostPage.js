import React from "react";
import theme from "../styles/theme";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { Link } from "react-router-dom";

const PostPage = (props) => {
  const [mdinfo, setMD] = useState("");
  return (
    <Container>
      <div className="markarea">
        <div data-color-mode="dark">
          <MDEditor height="100%" width="100%" value={mdinfo} onChange={setMD} />
        </div>
      </div>
      dropdown
    </Container>
  );
};

export default PostPage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  min-height: 100vh;
  align-items: center;
  background-color: ${theme.colors.background};
  box-sizing: border-box;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  align-items: center;
  background-color: gray;
  box-sizing: border-box;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  align-items: center;
  background-color: black;
  box-sizing: border-box;
`;
