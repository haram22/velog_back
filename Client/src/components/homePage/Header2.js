import styled from "styled-components";
import theme from "../../styles/theme";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["오늘", "이번 주", "이번 달", "올해"];
const defaultOption = options[1];

export default function Header2() {
  return (
    <HeaderContainer2>
      <TabBarButton style={{marginLeft:"40px"}}>
        <TrendingUpIcon
          sx={{ fontSize: "24px", color: "white", paddingTop: "5px" }}
        />
        <div style={{ paddingTop: "8px", paddingLeft: "5px"}}>트렌딩</div>
      </TabBarButton>
      <TabBarButton borderColor="transparent">
        <AccessTimeIcon
          sx={{ fontSize: "24px", color: "white", paddingTop: "5px", paddingLeft: "10px"}}
        />
        <div style={{ paddingTop: "8px", paddingLeft: "5px" }}>최신</div>
      </TabBarButton>
      <TabBarButton borderColor="transparent">
        <RssFeedIcon
          sx={{ fontSize: "24px", color: "white", paddingTop: "5px" }}
        />
        <div style={{ paddingTop: "8px", paddingLeft: "5px" }}>피드</div>
      </TabBarButton>
      <Spacer></Spacer>
      <StyledDropdown options={options} value={defaultOption} />
      <MoreVertIcon
        sx={{
          fontSize: "24px",
          color: "white",
          paddingTop: "5px",
          paddingRight: "90px",
          paddingLeft: "10px"
        }}
      />
    </HeaderContainer2>
  );
}

const HeaderContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  max-height: 40px;
  background-color: ${theme.colors.background};
  position: fixed;
  margin-top: 30px;
  padding-top: 80px;
  margin-left: 40px;
  margin-right: 40px;
  top: 0;
`;

const Spacer = () => <div style={{ flexGrow: 1 }} />;

const TabBarButton = styled.button`
  display: flex;
  flex-direction: row;
  text-align: center;
  background-color: transparent;
  color: ${theme.colors.white1};
  border-color: transparent;
  border-bottom: 2px solid
    ${(props) => props.borderColor || theme.colors.white1};
  width: 90px;
  font-size: 16px;
  font-weight: 700;
`;

const StyledDropdown = styled(Dropdown)`
  .Dropdown-control {
    background-color: ${theme.colors.secondBlack};
    color: white;
    border-radius: 5px;
    border-color: transparent;
    width: 110px;
    height: 32px;
    font-size: 13px;
  }
  .Dropdown-menu {
    background-color: ${theme.colors.secondBlack};
    color: white;
    font-size: 13px;
  }
  .Dropdown-option.is-selected {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondBlack};
    font-size: 13px;
  }
  .Dropdown-option {
    color: ${theme.colors.white};
    font-size: 13px;
  }
`;