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
      <Navbar className="text-light container" expand="md">
        <NavbarToggler onClick={this.toggleNav}>
          <span className="fa fa-angle-double-down fa-md" />
        </NavbarToggler>
          <NavbarBrand className="mr-auto" href="/">
            <img src="assets/images/logo.png" height="30" width="30" alt="bhushan"/> Bhushan Mhatre
          </NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav>
              <NavItem><NavLink href='/workexp'><span className="fa fa-server fa-md"> Experience</span></NavLink></NavItem>
              <NavItem><NavLink href='/certificate'><span className="fa fa-trophy fa-md"> Certificates</span></NavLink></NavItem>
              <NavItem><NavLink href='/project'><span className="fa fa-code fa-md"> Projects</span></NavLink></NavItem>
              <NavItem><NavLink href='/contact'><span className="fa fa-phone fa-md"> Contact</span></NavLink></NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;