import React, { Component } from 'react';
import { Jumbotron, Col } from 'react-bootstrap';

export default class FinalProduct extends Component { 
  render () {                                   
    return (
      <div>
        <Col sm={8} smOffset={2}>
          <Jumbotron>
	  				<h1 align="center">Here is our final product!</h1>
	  				<p align="center">
	    			 	...Just kidding, we don't have one.
	  				</p>
					</Jumbotron>
				</Col>
      </div>
    )
  }
}