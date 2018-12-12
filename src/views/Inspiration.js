import React, { Component } from 'react';
import { Jumbotron, Col, Grid } from 'react-bootstrap';
import ImpactCarousel from '../components/impactcarousel'

export default class Inspiration extends Component { 
  render () {                                   
    return (
      <div>
        <Col sm={8} smOffset={2}>
          <Jumbotron>
	  				<h1 align="center">How was our product inspired?</h1>
            <Grid>
  	  				<ImpactCarousel />
            </Grid>  
					</Jumbotron>
				</Col>
      </div>
    )
  }
}