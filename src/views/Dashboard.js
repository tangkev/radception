import React, { Component } from 'react';
import { Col, Jumbotron, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Redirect } from 'react-router';
import axios from 'axios';
import DeviceIncorrectAlert from '../components/deviceincorrectalert';
import Device from '../components/device';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			deviceToAdd: '',
			rerender: false,
			showAlert: false
		}
	}

	onRerender = () => {
		this.setState({ rerender: false })
	}

	turnAlertOff = () => {
    this.setState({ showAlert: false })
  }

	onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

	onSubmit = (e) => {
    e.preventDefault()
    const { deviceToAdd, rerender, showAlert } = this.state;
    const user = this.props.user;
    const deviceurl = 'http://radception-server.serveo.net/devices/' + deviceToAdd;
    const userurl = 'http://radception-server.serveo.net/users/' + user;
    axios({
      method: 'GET',
      url: deviceurl
      })
      .then(resp => {
        this.props.onAddDevice(deviceToAdd)
        const devices = this.props.devices;
        axios({
            method: 'PUT',
            url: userurl, 
            data: {
              "devices": devices
              },
            headers: {'Content-Type': 'application/json' }
          })
        this.setState({ showAlert: false })
        this.setState({ deviceToAdd: '' })
        this.setState({ rerender: true })
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({ showAlert: true })
        }
      })
  }

  render () {
  	const user = this.props.user;
  	const devices = this.props.devices;
  	const { deviceToAdd, rerender, showAlert } = this.state;

  	if (rerender) {
  		this.onRerender()
  		return (
  			<Redirect to="/dashboard" />
  		)
  	}

    return (
      <div>
      	<h1 align="center">{user}'s Dashboard</h1>
       	<Col sm={8} smOffset={2}>
          <Jumbotron>
          	<DeviceIncorrectAlert showAlert={this.state.showAlert} turnAlertOff={this.turnAlertOff} />
          	<Col smOffset={1}>
	          	<Form inline onSubmit={this.onSubmit}>
							  <FormGroup controlId="formInlineDevice">
							    <ControlLabel>Add Device:</ControlLabel>{' '}
							    <FormControl type="text" placeholder="Device ID" name="deviceToAdd" value={deviceToAdd} onChange={this.onChange} />
							  </FormGroup>{' '}
							  <Button type="submit">Add</Button>
							</Form>
						</Col>
						<p align="center">
		  				Your devices are: {devices}.
						</p>
						<Device devices={devices} />
						<p align="center">
		  				<Button bsStyle="primary">Learn more</Button>
						</p>
					</Jumbotron>
				</Col>
      </div>
    )
  }
}