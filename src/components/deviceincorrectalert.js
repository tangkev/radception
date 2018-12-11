import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';

export default class DeviceIncorrectAlert extends Component {
  constructor(props) {
    super(props);
  }

  onTurnOff = () => {
    this.props.turnAlertOff();
  }  

  render() {
    if (this.props.showAlert) {
      return (
        <Alert bsStyle="danger" onDismiss={this.onTurnOff}>
          <h2 align="center">This device ID is invalid.</h2>
          <p align="center">
            Please re-enter a valid device.
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