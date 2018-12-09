import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavBarOn extends Component {  
  render () {                                   
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
          <NavItem eventKey={1} href="/signin">
            Dashboard
          </NavItem>
          <NavItem eventKey={2} href="/">
            Sign Out
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}