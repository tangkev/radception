import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';
import NavBar from '../components/navbar';

export default class SignUp extends Component { 
  render () {                                   
      return (
        <div>
          <NavBar />
          <Form horizontal>
            <FormGroup controlId="formHorizontalFirstName">
              <Col componentClass={ControlLabel} sm={2}>
                First Name
              </Col>
              <Col sm={3}>
                <FormControl type="text" placeholder="First Name" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalLastName">
              <Col componentClass={ControlLabel} sm={2}>
                Last Name
              </Col>
              <Col sm={3}>
                <FormControl type="text" placeholder="Last Name" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={3}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={3}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={3}>
                <Button type="submit">Sign up</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      )
   }
}