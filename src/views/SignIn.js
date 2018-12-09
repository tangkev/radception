import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { username, password } = this.state;
    this.props.updateLoggedOn(username);
  }

  render () {
    const { username, password } = this.state;                        
    return (
      <div>
        <Form horizontal onSubmit={this.onSubmit}>
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
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}