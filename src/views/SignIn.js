import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button, Jumbotron } from 'react-bootstrap';
import { Redirect } from 'react-router';
import axios from 'axios';
import LoginIncorrectAlert from '../components/loginincorrectalert';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      showAlert: false,
    }
  }

  turnAlertOff = () => {
    this.setState({ showAlert: false })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { username, password, showAlert } = this.state;
    const userurl = 'http://radception-server.serveo.net/users/' + username;
    axios({
      method: 'GET',
      url: userurl
      })
      .then(res => {
        const resp = res.data;
        if (resp['username'] === username) {
          if (resp['password'] === password) {
            this.props.onLoggedOn(username, resp['devices'])
          }
        }
        this.setState({ showAlert: true })
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({ showAlert: true })
        }
      })
  }

  render () {
    const { username, password, showAlert } = this.state;
    if (this.props.loggedOn){
      return ( 
        <Redirect to="/dashboard" />
      )
    }                    
    return (
      <div>
        <Col sm={8} smOffset={2}>
          <h1 align="center">Sign In</h1>
          <Jumbotron>
            <LoginIncorrectAlert showAlert={this.state.showAlert} turnAlertOff={this.turnAlertOff} />
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
          </Jumbotron>
        </Col>
      </div>
    )
  }
}