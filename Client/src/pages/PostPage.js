import React from "react";
import theme from "../styles/theme";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import dummyData from "../data/Dummy.json";

export default function PostPage() {
  const { id } = useParams();
  const editData = dummyData.find((item) => item.id === parseInt(id));

  const [title, setTitle] = useState(editData ? editData.title : "");
  const [mdinfo, setMD] = useState(editData ? editData.content : "");
  let navigate = useNavigate();
  
  function CancelButtonClicked() {
    navigate("/Home");
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Markdown 에디터 변경 핸들러
  const handleMDChange = (newMD) => {
    setMD(newMD);
  };

  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={handleTitleChange}
      />
      <div className="markarea">
        <div data-color-mode="dark">
          <StyledMDEditor
            height="100vh"
            width="100vw"
            value={mdinfo}
            onChange={handleMDChange}
          />
          <BottomContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CancelButton onClick={CancelButtonClicked} style={{ marginLeft: "10px" }}>
                <ArrowBackIcon
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    paddingTop: "10px"
                  }}
                />
                <span
                  style={{
                    lineHeight: "20px",
                    paddingLeft: "10px",
                    paddingTop: "10px"
                  }}
                >
                  나가기
                </span>
              </CancelButton>
              <Spacer />
              <SubSaveButton>임시저장</SubSaveButton>
              <SaveButton>출간하기</SaveButton>
            </div>
          </BottomContainer>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  flex-direction: column;
  overflow-y: hidden;
  align-items: center;
  background-color: ${theme.colors.background};
  box-sizing: border-box;
  max-width: calc(100vw + 40px);
  max-height: 100vh;
`;

const StyledMDEditor = styled(MDEditor)`
  border: 1px solid transparent;
  border-radius: 0px;
  background-color: ${theme.colors.background};
  max-width: 100%;
  max-height: calc(100vh - 180px);
  overflow-y: auto;
  overflow-x: hidden;
`;

const BottomContainer = styled.div`
  position: absolute; // 또는 fixed, 상황에 따라 선택
  flex-direction: row;
  width: 50%;
  height: 70px;
  background-color: #333;
  z-index: 10;
  overflow-x: hidden;
  margin-left: -40px;
  color: ${theme.colors.white1};
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  border: 0px solid transparent;
  border-radius: 0px;
  background-color: ${theme.colors.background};
  height: 66px;
  font-size: 45px;
  font-weight: 700;
  max-width: 50%;
  overflow-x: hidden;
  color: ${theme.colors.unSelected};

  &:focus {
    border: 0px solid transparent;
    outline: none;
    color: ${theme.colors.white};
  }
`;

const CancelButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 18px;
  transition: background-color 0.3s;
  padding-bottom: 10px;
  margin-top: 10px;
  margin-right: 16px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  left: 25px;
  &:hover {
    background-color: ${theme.colors.background};
  }
`;

const SubSaveButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: ${theme.colors.primary};
  font-weight: 600;
  font-size: 18px;
  transition: background-color 0.3s;
  padding: 8px 20px;
  margin-top: 8px;
  margin-right: 16px;
  &:hover {
    background-color: ${theme.colors.background};
  }
`;

const SaveButton = styled.button`
  background-color: ${theme.colors.primary2};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: ${theme.colors.background};
  font-weight: 600;
  font-size: 18px;
  transition: background-color 0.3s;
  padding: 8px 20px;
  margin-top: 8px;
  margin-right: 16px;
  left: 25px;
  &:hover {
    background-color: ${theme.colors.primary};
  }
`;

const Spacer = () => <div style={{ flexGrow: 1 }} />;
