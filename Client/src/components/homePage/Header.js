import styled from "styled-components";
import theme from "../../styles/theme";
import Logo from "../../assets/logo.svg";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();

  function PostButtonClicked() {
    navigate("/PostPage"); 
  }

  return (
    <HeaderContainer>
      <img src={Logo} width={69.92} alt="Logo" />
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
      <AccountCircleIcon
        sx={{
          fontSize: "30px",
          color: "white",
          paddingTop: "5px",
          paddingLeft: "20px",
          paddingRight: "80px",
        }}
      />
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
    cursor: pointer; // 마우스 포인터 변경
  }
`;
