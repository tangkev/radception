import React, { Component } from 'react';
import { Jumbotron, Button} from 'react-bootstrap';
import NavBar from '../components/navbar'

export default class Home extends Component { 
  render () {                                   
      return (
        <div>
           <NavBar />
           <Jumbotron>
  				<h1>Welcome to Radception!</h1>
  				<p>
    				This is a simple hero unit, a simple jumbotron-style component for calling
    				extra attention to featured content or information.
  				</p>
  				<p>
    				<Button bsStyle="primary">Learn more</Button>
  				</p>
			</Jumbotron>
        </div>
      )
   }
}