import React, { Component } from 'react';
import { Jumbotron, Col } from 'react-bootstrap';

export default class AboutUs extends Component { 
  render () {                                   
    return (
      <div>
        <Col sm={8} smOffset={2}>
          <Jumbotron>
	  				<h1 align="center">Acknowledgements</h1>
            <h3 align="center">
              We would like to extend our thanks to everyone who has helped us along this semester: <br></br><br></br>
              Prof. Zachary Hartwig, our 22.033 instructor; <br></br><br></br>
              Prof. Mike Short, our team mentor; <br></br><br></br>
              Dr. Richard Lanza, for advising us; <br></br><br></br>
              Dr. Gordon Kohse, for providing us with lab space; <br></br><br></br>
              Mitchell Galanek, for providing us with radioisotopes; <br></br><br></br>
              And all of our peers in the class!
            </h3>
					</Jumbotron>
				</Col>
      </div>
    )
  }
}