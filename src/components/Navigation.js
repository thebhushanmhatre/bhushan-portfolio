import React, { useState } from 'react';
import {  Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse} from 'reactstrap';

function Navigation(){
  const [isNavOpen, toggleNav] = useState(false)

  return(
    <Navbar id="navbar" className="text-light container mb-3" expand="lg">
        <NavbarBrand className="mr-auto" href="/">
          <img id="logo" src="assets/images/logo.jpg" height="40" width="40" alt="bhushan"/> Bhushan Mhatre
        </NavbarBrand>
        <NavbarToggler onClick={() => toggleNav(!isNavOpen) } >
          <span className="fa fa-angle-double-down fa-md" />
        </NavbarToggler>
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className="ml-auto">
            <NavItem><NavLink href='/workexp'><span className="fa fa-server fa-lg"> Work-Experience</span></NavLink></NavItem>
            <NavItem><NavLink href='/projects'><span className="fa fa-code fa-lg"> Projects</span></NavLink></NavItem>
            <NavItem><NavLink href='/certificates'><span className="fa fa-trophy fa-lg"> Certificates</span></NavLink></NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  );
}

export default Navigation;