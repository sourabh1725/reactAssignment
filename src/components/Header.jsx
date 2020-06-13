import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = (props) => {
  const tabs =
    typeof props.renderTabs === "function" ? props.renderTabs() : null;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">OMDB</Typography>
      </Toolbar>
      {tabs}
    </AppBar>
  );
};

export default Header;
