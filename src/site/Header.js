import React from "react";
import { Navbar, NavbarBrand, NavItem, Nav, NavLink } from "reactstrap";
import NavBar from "./NavBar";

const Header = (props) => {
  return (
    <header>
      <NavBar clearToken={props.clearToken} />
    </header>
  );
};

export default Header;
