import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import logo from "../assets/logo.svg";

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
          <BottomNavigationAction label="Items" />
          <BottomNavigationAction label="Mounts" />
          <BottomNavigationAction label="Talents" />
          <BottomNavigationAction label="Guides" />
        </BottomNavigation>
      </Box>
    </header>
  );
}

export default SimpleBottomNavigation;
