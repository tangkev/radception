import React, { Component } from 'react';
import { Jumbotron, Col } from 'react-bootstrap';
import NavBar from '../components/navbar'

export default class FinalProduct extends Component { 
  render () {                                   
      return (
        <div>
           <NavBar />
           <Col sm={8} smOffset={2}>
	           <Jumbotron>
	  				<h1 align="center">Here's our final product!</h1>
	  				<p align="center">
	    				...Just kidding we don't have one.
	  				</p>
				</Jumbotron>
			</Col>
        </div>
      )
   }
}