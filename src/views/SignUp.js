import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import UserTakenAlert from '../components/usertakenalert';
import AccountMadeAlert from '../components/accountmadealert';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      showSuccessAlert: false,
      showFailAlert: false,
    }
  }

  turnSuccessAlertOff = () => {
    this.setState({ showSuccessAlert: false })
  }

  turnFailAlertOff = () => {
    this.setState({ showFailAlert: false })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { firstname, lastname, email, username, password, showSuccessAlert, showFailAlert } = this.state;
    const userurl = 'http://radception-server.serveo.net/users/' + username;
    axios({
      method: 'GET',
      url: userurl
      })
      .then(resp => {
        this.setState({ showFailAlert: true })
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({ showFailAlert: false })
          axios({
            method: 'POST',
            url: 'http://radception-server.serveo.net/users', 
            data: {
              "firstname": firstname,
              "lastname": lastname,
              "email": email,
              "username": username,
              "password": password,
              "devices": ['']
              },
            headers: {'Content-Type': 'application/json' }
          })
          this.setState({ showSuccessAlert: true })
        }
      })
  }

  render () {
    const { firstname, lastname, email, username, password, showSuccessAlert, showFailAlert } = this.state;                        
    return (
      <div>
        <Col sm={8} smOffset={2}>
          <h1 align="center">Account Creation</h1>
          <Jumbotron>
            <UserTakenAlert showFailAlert={this.state.showFailAlert} turnFailAlertOff={this.turnFailAlertOff} />
            <AccountMadeAlert showSuccessAlert={this.state.showSuccessAlert} turnSuccessAlertOff={this.turnSuccessAlertOff} />
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
          </Jumbotron>
        </Col>
      </div>
    )
  }
}