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
      <img className="logo" alt="Logo" src={logo} />
      <div>WoW BASE</div>
      <Box theme={theme} sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            className="nav-buttons"
            theme={theme}
            label="Items"
          />
          <BottomNavigationAction
            className="nav-buttons"
            theme={theme}
            label="Mounts"
          />
          <BottomNavigationAction
            className="nav-buttons"
            theme={theme}
            label="Talents"
          />
          <BottomNavigationAction
            className="nav-buttons"
            theme={theme}
            label="Guides"
          />
        </BottomNavigation>
      </Box>
    </header>
  );
}

export default SimpleBottomNavigation;
