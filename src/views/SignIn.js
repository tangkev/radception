import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';
import NavBar from '../components/navbar';

export default class SignIn extends Component { 
  render () {                                   
      return (
        <div>
          <NavBar />
          <Form horizontal>
            <FormGroup controlId="formHorizontalUsername">
              <Col componentClass={ControlLabel} sm={2} smOffset={3}>
                Username
              </Col>
              <Col sm={2}>
                <FormControl type="username" placeholder="Username" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2} smOffset={3}>
                Password
              </Col>
              <Col sm={2}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={5} sm={2}>
                <Button type="submit">Sign in</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      )
   }
}