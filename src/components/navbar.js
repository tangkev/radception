import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavBar extends Component { 
  render () {                                   
      return (
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Radception</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              Inspiration
            </NavItem>
            <NavItem eventKey={3} href="#">
              Prototype
            </NavItem>
            <NavItem eventKey={4} href="#">
              Final Product
            </NavItem>
            <NavItem eventKey={5} href="#">
              Impact
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Sign In
            </NavItem>
            <NavItem eventKey={2} href="#">
              Sign Up
            </NavItem>
          </Nav>
        </Navbar>
      )
   }
}