import React, { Component } from 'react';
import { Jumbotron, Col } from 'react-bootstrap';
import NavBar from '../components/navbar'

export default class Prototype extends Component { 
  render () {                                   
    return (
      <div>
        <Col sm={8} smOffset={2}>
          <Jumbotron>
	  				<h1 align="center">Here is our prototype!</h1>
	  				<p align="center">
	    			 	Seems legit, right?
	  				</p>
					</Jumbotron>
				</Col>
      </div>
    )
  }
}