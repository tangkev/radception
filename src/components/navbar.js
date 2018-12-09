import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavBarOff extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    let nav1;
    let nav2;

    if (this.props.loggedOn) {
      nav1 = <NavItem eventKey={1} href="/signin">Dashboard</NavItem>;
      nav2 = <NavItem eventKey={2} href="/">Sign Out</NavItem>;
    }
    else {
      nav1 = <NavItem eventKey={1} href="/signin">Sign In</NavItem>;
      nav2 = <NavItem eventKey={2} href="/signup">Sign Up</NavItem>;
    }

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Radception</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">
            Home
          </NavItem>
          <NavItem eventKey={2} href="/inspiration">
            Inspiration
          </NavItem>
          <NavItem eventKey={3} href="/prototype">
            Prototype
          </NavItem>
          <NavItem eventKey={4} href="/finalproduct">
            Final Product
          </NavItem>
          <NavItem eventKey={5} href="/impact">
            Impact
          </NavItem>
        </Nav>
        <Nav pullRight>
          {nav1}
          {nav2}
        </Nav>
      </Navbar>
    )
  }
}