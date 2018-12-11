import React, { Component } from 'react';
import { Col, Jumbotron, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
	}

  render () {
  	const user = this.props.user;
  	const devices = this.props.devices;            
    return (
      <div>
      	<h1 align="center">{user}'s Dashboard</h1>
       	<Col sm={8} smOffset={2}>
          <Jumbotron>
          	<Col smOffset={1}>
	          	<Form inline>
							  <FormGroup controlId="formInlineDevice">
							    <ControlLabel>Add Device:</ControlLabel>{' '}
							    <FormControl type="text" placeholder="Device ID" />
							  </FormGroup>{' '}
							  <Button type="submit">Add</Button>
							</Form>
						</Col>
						<p align="center">
		  				Your devices are: {devices}.
						</p>
						<p align="center">
		  				<Button bsStyle="primary">Learn more</Button>
						</p>
					</Jumbotron>
				</Col>
      </div>
    )
  }
}