import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBarOff extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    let nav1;
    let nav2;

    if (this.props.loggedOn) {
      nav1 = <NavItem eventKey={8}><Link to="/signin">Dashboard</Link></NavItem>;
      nav2 = <NavItem eventKey={9}><Link to="/signout">Sign Out</Link></NavItem>;
    }
    else {
      nav1 = <NavItem eventKey={6}><Link to="/signin">Sign In</Link></NavItem>;
      nav2 = <NavItem eventKey={7}><Link to="/signup">Sign Up</Link></NavItem>;
    }

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Radception</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/inspiration">Inspiration</Link>
          </NavItem>
          <NavItem eventKey={3}>
            <Link to="/prototype">Prototype</Link>
          </NavItem>
          <NavItem eventKey={4}>
            <Link to="/finalproduct">Final Product</Link>
          </NavItem>
          <NavItem eventKey={5}>
            <Link to="/impact">Impact</Link>
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