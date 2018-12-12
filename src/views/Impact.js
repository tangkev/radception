import React, { Component } from 'react';
import { Jumbotron, Col, Grid, PanelGroup, Panel } from 'react-bootstrap';

export default class Impact extends Component { 
  render () {                                   
    return (
      <div>
        <Col sm={8} smOffset={2}>
          <Jumbotron>
	  				<h1 align="center">What does this all mean?</h1>
	  				<div align="center">
	  					<Grid>
	              <PanelGroup accordion id="accordion">
	                <Panel eventKey="1" bsStyle="primary">
	                  <Panel.Heading>
	                    <Panel.Title toggle><h3>Widespread Affordability</h3></Panel.Title>
	                  </Panel.Heading>
	                  <Panel.Body collapsible>
	                    <h1 align="center">
												<img width='800px' src={require('../images/prices.png')}></img>
											</h1>
	                  </Panel.Body>
	                </Panel>
	                <Panel eventKey="2" bsStyle="primary">
	                  <Panel.Heading>
	                    <Panel.Title toggle><h3>Reliable Safety</h3></Panel.Title>
	                  </Panel.Heading>
	                  <Panel.Body collapsible>
	                    <h1 align="center">
												<img width='800px' src={require('../images/safety.png')}></img>
											</h1>
	                  </Panel.Body>
	                </Panel>
	                <Panel eventKey="3" bsStyle="primary">
	                  <Panel.Heading>
	                    <Panel.Title toggle><h3>Superior Function</h3></Panel.Title>
	                  </Panel.Heading>
	                  <Panel.Body collapsible>
	                    <h1 align="center">
												<img width='1000px' src={require('../images/function.png')}></img>
											</h1>
	                  </Panel.Body>
	                </Panel>
	                <Panel eventKey="4" bsStyle="primary">
	                  <Panel.Heading>
	                    <Panel.Title toggle><h3>Contemporary Convenience</h3></Panel.Title>
	                  </Panel.Heading>
	                  <Panel.Body collapsible>
	                    <h1 align="center">
												<img width='500px' src={require('../images/convenience.png')}></img>
											</h1>
	                  </Panel.Body>
	                </Panel>
	                <Panel eventKey="5" bsStyle="primary">
	                  <Panel.Heading>
	                    <Panel.Title toggle><h3>Intuitive Interaction</h3></Panel.Title>
	                  </Panel.Heading>
	                  <Panel.Body collapsible>
	                    <h1 align="center">
												<img width='500px' src={require('../images/logo.png')}></img>
											</h1>
	                  </Panel.Body>
	                </Panel>
	              </PanelGroup>
	            </Grid>
            </div>
					</Jumbotron>
				</Col>
      </div>
    )
  }
}