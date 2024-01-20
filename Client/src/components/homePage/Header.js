import styled from "styled-components";
import theme from "../../styles/theme";
import Logo from "../../assets/logo.svg";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  let navigate = useNavigate();

  function PostButtonClicked() {
    navigate("/PostPage");
  }

  function LogoClicked() {
    navigate("/");
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // 외부 클릭 감지를 위한 이벤트 리스너 추가
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <HeaderContainer style={{ marginLeft: "40px", paddingLeft: "90px" }}>
      <img src={Logo} width={69.92} alt="Logo" onClick={LogoClicked} />
      <Spacer />
      <NightlightIcon
        sx={{ fontSize: "30px", color: "white", paddingTop: "5px" }}
      />
      <SearchIcon
        sx={{
          fontSize: "30px",
          color: "white",
          paddingTop: "5px",
          paddingLeft: "20px",
        }}
      />

      <PostButton onClick={PostButtonClicked}>새 글 작성</PostButton>

      <DropdownContainer ref={ref}>
        <ProfileButton
          onClick={toggleDropdown}
          style={{ backgroundColor: "transparent" }}
        >
          {/*  */}
          <AccountCircleIcon
            sx={{
              fontSize: "30px",
              color: "white",
              paddingTop: "5px",
              paddingLeft: "20px",
              paddingRight: "80px",
            }}
          />
        </ProfileButton>
        {isDropdownOpen && (
          <StyledDropdown>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <DropdownTextStyle href="/myPage">내 벨로그</DropdownTextStyle>
              <DropdownTextStyle href="/notFound">임시 글</DropdownTextStyle>
              <DropdownTextStyle href="/notFound">읽기 목록</DropdownTextStyle>
              <DropdownTextStyle href="/notFound">설정</DropdownTextStyle>
              <DropdownTextStyle href="/notFound">로그아웃</DropdownTextStyle>
            </ul>
          </StyledDropdown>
        )}
      </DropdownContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 40px;
  background-color: ${theme.colors.background};
  position: fixed;
  padding-top: 12px;
  margin-right: 40px;
  top: 0;
  z-index: 1000;
`;

const Spacer = () => <div style={{ flexGrow: 1 }} />;

const PostButton = styled.button`
  text-align: center;
  background-color: ${theme.colors.background};
  color: ${theme.colors.white1};
  border-radius: 20px;
  border-color: ${theme.colors.white1};
  border-width: 2px;
  border-style: solid;
  margin-top: 5px;
  margin-left: 20px;
  width: 109px;
  height: 35px;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    background-color: white;
    color: ${theme.colors.background};
    cursor: pointer;
  }
`;

const ProfileButton = styled.button`
  text-align: center;
  background-color: ${theme.colors.background};
  color: ${theme.colors.white1};
  border-color: transparent;
  width: 35px;
  height: 35px;
  margin-right: 130px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  background-color: transparent;
`;

const StyledDropdown = styled.div`
  position: absolute;
  background-color: ${theme.colors.secondBlack};
  margin-left: -132px;
  margin-top: 20px;
  width: 192px;
`;

const DropdownTextStyle = styled.a`
  color: ${theme.colors.white};
  font-size: 16px;
  text-decoration: none;
  margin-left: -20px;
  padding-bottom: 13px;
  padding-top: 15px;
  margin-top: -5px;

  &:hover {
    color: ${theme.colors.primary};
    cursor: pointer;
  }
`;
