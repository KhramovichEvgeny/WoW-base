import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/styles";
import logo from "../assets/logo.svg";

const MyButton = styled(BottomNavigationAction)({
  color: "#e2a233",
  "&:hover": {
    color: "#ff8000",
    textDecoration: "underline",
  },
  "&.Mui-selected": {
    color: "#ff8000",
    textDecoration: "underline",
  },
});

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <header>
      <img alt="Logo" className="logo" src={logo} />
      <div>WoW BASE</div>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          value={value}
        >
          <MyButton label="Items" />
          <MyButton label="Mounts" />
          <MyButton label="Talents" />
          <MyButton label="Guides" />
        </BottomNavigation>
      </Box>
    </header>
  );
}

export default SimpleBottomNavigation;
