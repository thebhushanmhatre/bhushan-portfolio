import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { useTheme } from '../contexts/ThemeContext';

function Navigation(props) {
  const [isNavOpen, toggleNav] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Navbar id="navbar" className={`container mb-3 ${darkMode ? 'dark' : ''}`} expand="lg" dark={darkMode}>
      <NavbarBrand className="mr-auto" href="/">
        <img
          id="logo"
          src="./assets/images/logo.jpg"
          height="40"
          width="40"
          alt="bhushan"
        />
        <span style={{ fontSize: 'larger' }}>
          {' '}
          <strong> Bhushan Mhatre </strong>
        </span>
      </NavbarBrand>
      <NavItem
        onClick={() => toggleTheme()}
        style={{ listStyleType: 'none', cursor: 'pointer' }}
      >
        {darkMode === false ? (
          <span
            className="fas fa-sun-o fa-lg"
            style={{ color: 'orange' }}
            id="darkmmodeicon"
          />
        ) : (
          <span
            className="fas fa-moon-o fa-lg"
            style={{ color: '#007bff' }}
            id="darkmmodeicon"
          />
        )}
      </NavItem>
      <NavbarToggler onClick={() => toggleNav(!isNavOpen)}>
        {isNavOpen ? (
          <span className="fa fa-angle-double-up fa-lg" />
        ) : (
          <span className="fa fa-angle-double-down fa-lg" />
        )}
      </NavbarToggler>
      <Collapse isOpen={isNavOpen} navbar style={{ flexGrow: 0 }}>
        <Nav navbar className="ml-auto text-end">
          <NavItem>
            <NavLink href="/experience">
              <span className="fa fa-server fa-lg"> Career </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projects">
              <span className="fa fa-code fa-lg"> Projects</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/certificates">
              <span className="fa fa-trophy fa-lg"> Certificates</span>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
