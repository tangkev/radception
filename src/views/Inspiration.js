import React, { Component } from 'react';
import { Jumbotron, Col } from 'react-bootstrap';
import NavBar from '../components/navbar'

export default class Inspiration extends Component { 
  render () {                                   
      return (
        <div>
           <NavBar />
           <Col sm={8} smOffset={2}>
	           <Jumbotron>
	  				<h1 align="center">How were we inspired?</h1>
	  				<p align="center">
	    				I dunno TBH.
	  				</p>
				</Jumbotron>
			</Col>
        </div>
      )
   }
}