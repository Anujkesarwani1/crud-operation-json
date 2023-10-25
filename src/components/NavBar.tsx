import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Tabs = styled(NavLink)({
  fontWeight: "bold",
  marginRight: "1rem",
  color: "#FFFF",
  textDecoration: "none",
});

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs to="/">Kasper InfoTech</Tabs>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="add">Add Users</Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
