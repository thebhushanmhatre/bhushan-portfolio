import React, { useState } from 'react';
import {  Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse} from 'reactstrap';

function Navigation(){
  const [isNavOpen, toggleNav] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return(
    <Navbar id="navbar" className="text-light container mb-3" expand="lg">
      <NavbarBrand className="mr-auto" href="/">
        <img id="logo" src="assets/images/logo.jpg" height="40" width="40" alt="bhushan"/> Bhushan Mhatre
      </NavbarBrand>
      <NavItem onClick={() => setDarkMode(darkMode => !darkMode)} >
        <span className={darkMode ? "fas fa-sun-o fa-lg" : "fas fa-sun-o fa-lg"} style={darkMode ? { color: "orange" } : { color: "gold" }} /> {' '}
        <span className={darkMode ? "fa fa-toggle-on fa-lg" : "fa fa-toggle-off fa-lg"} style={darkMode ? { color: "slateblue" } : { color: "gold" }} /> {' '}
        <span className={darkMode ? "fas fa-moon-o fa-lg" : "fas fa-moon-o fa-lg"} style={darkMode ? { color: "skyblue" } : { color: "slateblue" }}  />  {' '}
      </NavItem>
      <NavbarToggler onClick={() => toggleNav(!isNavOpen)} >
        <span className="fa fa-angle-double-down fa-lg" />
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