import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import ImageNavbar from "./components/imageNavbar";

const Header = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#2285ff" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ticketmaster
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Header />
      <ImageNavbar />
    </div>
  );
}
