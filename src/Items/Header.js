import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { createTheme } from "@mui/material/styles";
import logo from "../assets/logo.svg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e2a233",
    },
    secondary: {
      main: "#FFF",
    },
  },
});

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <header>
      <img alt="Logo" className="logo" src={logo} />
      <div>WoW BASE</div>
      <Box sx={{ width: 500 }} theme={theme}>
        <BottomNavigation
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          value={value}
        >
          <BottomNavigationAction
            className="nav-buttons"
            label="Items"
            theme={theme}
          />
          <BottomNavigationAction
            className="nav-buttons"
            label="Mounts"
            theme={theme}
          />
          <BottomNavigationAction
            className="nav-buttons"
            label="Talents"
            theme={theme}
          />
          <BottomNavigationAction
            className="nav-buttons"
            label="Guides"
            theme={theme}
          />
        </BottomNavigation>
      </Box>
    </header>
  );
}

export default SimpleBottomNavigation;
