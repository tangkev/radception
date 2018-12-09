import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';
import NavBar from '../components/navbar';

export default class SignUp extends Component {
  constructor() {
    super();
    
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { firstname, lastname, email, username, password } = this.state;
  }

  render () {
    const { firstname, lastname, email, username, password } = this.state;                        
    return (
      <div>
        <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup controlId="formHorizontalFirstName">
            <Col componentClass={ControlLabel} sm={2} smOffset={3}>
              First Name
            </Col>
            <Col sm={2}>
              <FormControl type="text" placeholder="First Name" name="firstname" value={firstname} onChange={this.onChange} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalLastName">
            <Col componentClass={ControlLabel} sm={2} smOffset={3}>
              Last Name
            </Col>
            <Col sm={2}>
              <FormControl type="text" placeholder="Last Name" name="lastname" value={lastname} onChange={this.onChange} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2} smOffset={3}>
              Email
            </Col>
            <Col sm={2}>
              <FormControl type="email" placeholder="Email" name="email" value={email} onChange={this.onChange} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalUsername">
            <Col componentClass={ControlLabel} sm={2} smOffset={3}>
              Username
            </Col>
            <Col sm={2}>
              <FormControl type="username" placeholder="Username" name="username" value={username} onChange={this.onChange} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2} smOffset={3}>
              Password
            </Col>
            <Col sm={2}>
              <FormControl type="password" placeholder="Password" name="password" value={password} onChange={this.onChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} smOffset={5}>
              <Button type="submit">Sign up</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}