import React, { Component } from 'react';
import {  Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse} from 'reactstrap';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render(){
    return(
      <Navbar id="navbar" className="text-light container mb-3" expand="lg">
          <NavbarBrand className="mr-auto" href="/">
            <img id="logo" src="assets/images/logo.jpg" height="40" width="40" alt="bhushan"/> Bhushan Mhatre
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav}>
            <span className="fa fa-angle-double-down fa-md" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="ml-auto">
              <NavItem><NavLink href='/workexp'><span className="fa fa-server fa-lg"> Work-Experience</span></NavLink></NavItem>
              <NavItem><NavLink href='/project'><span className="fa fa-code fa-lg"> Projects</span></NavLink></NavItem>
              <NavItem><NavLink href='/certificate'><span className="fa fa-trophy fa-lg"> Certificates</span></NavLink></NavItem>
              <NavItem><NavLink href='/education'><span className="fa fa-institution fa-lg"> Education</span></NavLink></NavItem>
              <NavItem><NavLink href='/contact'><span className="fa fa-phone fa-lg"> Contact</span></NavLink></NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;