import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';

export default class UserTakenAlert extends Component {
  constructor(props) {
    super(props);
  }

  onTurnOff = () => {
    this.props.turnFailAlertOff();
  }  

  render() {
    if (this.props.showFailAlert) {
      return (
        <Alert bsStyle="danger" onDismiss={this.onTurnOff}>
          <h2 align="center">Sorry, this username has been taken!</h2>
          <p align="center">
            Please choose a different username.
          </p>
          <p align="center">
            <Button onClick={this.onTurnOff}>Dismiss</Button>
          </p>
        </Alert>
      );
    }
    else {
      return null
    }
  }
}