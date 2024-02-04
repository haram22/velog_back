import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import dummyData from "../../data/Dummy.json";

export default function Comment() {
  const { id } = useParams();
  // const commentData = dummyData.find((item) => item.id === parseInt(id));

  const [inputValue, setInputValue] = useState("");
  const placeholderText = "댓글을 작성하세요";
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <CommentContainer>
      {/* <h3>{commentData.commentsCount}개의 댓글</h3> */}
      <h3>0개의 댓글</h3>
      <CommentContentContainer
        placeholder={placeholderText}
        value={inputValue}
        onChange={handleInputChange}
      />
      <CommentButton>댓글 작성</CommentButton>
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  height: ${(props) => props.height ?? "25%"};
  justify-content: ${(props) => props.content ?? "start"};
`;

const CommentContentContainer = styled.textarea`
  background-color: ${theme.colors.secondBlack};
  display: flex;
  width: 100%;
  margin-top: 10px;
  height: 60px;
  justify-content: "start";
  padding: 16px;
  font-size: 16px;
  color: ${theme.colors.white};
  border-radius: 5px;
  border: ${(props) => props.weight ?? "1px"} solid ${theme.colors.divider};
  &:focus {
    outline: none !important;
  }
`;

const CommentButton = styled.button`
  text-align: center;
  background-color: ${theme.colors.primary2};
  color: ${theme.colors.background};
  border-radius: 5px;
  border-color: ${theme.colors.primary2};
  border-width: 1px;
  border-style: solid;
  margin-top: 25px;
  width: 95px;
  height: 32px;
  font-size: 16px;
  font-weight: 700;
  margin-left: 700px;
  &:hover {
    cursor: pointer;
  }
`;
