import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Tooltip } from 'reactstrap';

function Navigation(){
  const [isNavOpen, toggleNav] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return(
    <Navbar id="navbar" className="text-light container mb-3" expand="lg">
      <NavbarBrand className="mr-auto" href="/">
        <img id="logo" src="assets/images/logo.jpg" height="40" width="40" alt="bhushan"/> Bhushan Mhatre
      </NavbarBrand>
      <NavItem onClick={() => setDarkMode(darkMode => !darkMode)} >
        {darkMode ? 
          <span className="fas fa-sun-o fa-lg" style={{ color: "orange" }} href="#" id="dmtt" /> :
          <span className="fas fa-moon-o fa-lg" style={{ color: "slateblue" }} href="#" id="dmtt" /> 
        }
        <Tooltip placement="right" isOpen={tooltipOpen} target="dmtt" toggle={toggle}> Coming Soon!</Tooltip>
      </NavItem>
      <NavbarToggler onClick={() => toggleNav(!isNavOpen)} >
        {isNavOpen ? <span className="fa fa-angle-double-up fa-lg" /> : <span className="fa fa-angle-double-down fa-lg" />}
      </NavbarToggler>
      <Collapse isOpen={isNavOpen} navbar>
        <Nav navbar className="ml-auto text-center">
          <NavItem><NavLink href='/workexp'><span className="fa fa-server fa-lg"> Work-Experience</span></NavLink></NavItem>
          <NavItem><NavLink href='/projects'><span className="fa fa-code fa-lg"> Projects</span></NavLink></NavItem>
          <NavItem><NavLink href='/certificates'><span className="fa fa-trophy fa-lg"> Certificates</span></NavLink></NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;