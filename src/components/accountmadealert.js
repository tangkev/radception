import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';

export default class AccountMadeAlert extends Component {
  constructor(props) {
    super(props);
  }

  onTurnOff = () => {
    this.props.turnSuccessAlertOff();
  }  

  render() {
    if (this.props.showSuccessAlert) {
      return (
        <Alert bsStyle="success" onDismiss={this.onTurnOff}>
          <h2 align="center">Your account has been made!</h2>
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