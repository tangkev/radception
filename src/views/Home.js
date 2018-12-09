import React, { Component } from 'react';
import { Jumbotron, Button, Col } from 'react-bootstrap';
import NavBar from '../components/navbar'

export default class Home extends Component {
  render () {                                   
    return (
      <div>
       	<Col sm={8} smOffset={2}>
          <Jumbotron>
						<h1 align="center">Welcome to Radception!</h1>
						<p align="center">
		  				We aim to win 22.033 because we're winners.
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