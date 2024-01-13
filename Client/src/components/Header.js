import styled from "styled-components";
import theme from "../styles/theme";
import Logo from "../assets/logo.svg";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} width={69.92} alt="Logo" />
      <Spacer />
      <NightlightIcon sx={{ fontSize: "30px", color: "white", paddingTop: "5px" }} />
      <SearchIcon sx={{ fontSize: "30px", color: "white", paddingTop: "5px", paddingLeft: "20px" }} />
      <PostButton>새 글 작성</PostButton>
      <AccountCircleIcon sx={{ fontSize: "30px", color: "white", paddingTop: "5px", paddingLeft: "20px", paddingRight: "80px"}} />
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
    margin-left: 20px;
    width: 110px;
    font-size: 16px;
    font-weight: 700;
`