import React, { Component } from 'react';
import { Jumbotron, Button, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';

export default class Home extends Component {
	constructor() {
		super()

		this.state = {
			learn: false,
		}
	}

	onLearn = () => {
		this.setState({ learn: true })
	}

  render () {
  	const learnSwitch = this.state.learn;

  	if (learnSwitch) {
  		return(
  			this.setState({ learn:false }),
  			<Redirect to="/inspiration" />
  		)
  	}
  	                      
    return (
      <div>
       	<Col sm={8} smOffset={2}>
          <Jumbotron>
						<h1 align="center">
							Welcome to Radception!
						</h1>
						<h2 align="center">
		  				The Inception of Modern Radiation Safety
						</h2>
						<h1 align="center">
							<img width='500px' src={require('../images/logo.png')}></img>
						</h1>
						<p align="center">
		  				<Button bsStyle="primary" onClick={this.onLearn}>Learn more</Button>
						</p>
					</Jumbotron>
				</Col>
      </div>
    )
  }
}