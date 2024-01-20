import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyDataTab from "./MyDataTab";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const theme = {
    colors: {
      primary: "#007bff",
      secondary: "#6c757d",
    },
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            ".MuiTabs-indicator": {
              backgroundColor: "#63e6be",
            },
          }}
        >
          <Tab
            label="글"
            {...a11yProps(0)}
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: value === 0 ? "#63e6be" : "white",
            }}
          />
          <Tab
            label="시리즈"
            {...a11yProps(0)}
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: value === 1 ? "#63e6be" : "white",
            }}
          />
          <Tab
            label="소개"
            {...a11yProps(0)}
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: value === 2 ? "#63e6be" : "white",
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MyDataTab/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        시리즈 준비 중
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        소개 준비 중
      </CustomTabPanel>
    </Box>
  );
}
