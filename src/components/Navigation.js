import React from 'react';
import {  Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function Navigation(){
  return(
    <Navbar color="dark" dark expand="md">
      <NavbarBrand className="mr-auto" href="/">
        <img src="assets/images/logo.png" height="30" width="30" alt="bhushan"/> Bhushan Mhatre
      </NavbarBrand>
      <Nav>
        <NavItem><NavLink href='#' text="light"><span className="fa fa-trophy fa-lg"> Certificate</span></NavLink></NavItem>
        <NavItem><NavLink href='#'><span className="fa fa-code fa-lg"> Projects</span></NavLink></NavItem>
        <NavItem><NavLink href='#'><span className="fa fa-phone fa-lg"> Contact</span></NavLink></NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navigation;