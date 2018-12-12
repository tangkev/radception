import React, { Component } from 'react';
import { Jumbotron, Col, Table, PanelGroup, Panel } from 'react-bootstrap';
import { Player } from 'video-react';

export default class OurProduct extends Component { 
  render () {                                   
    return (
      <div>
        <Col sm={8} smOffset={2}>
          <Jumbotron>
	  				<h1 align="center">Here is our product!</h1>
	  				<Table bordered responsive>
              <tbody>
                <tr>
                  <td width='50%'>
                    <div align="center">
                      <iframe src="https://myhub.autodesk360.com/ue2bbb0d9/shares/public/SH7f1edQT22b515c761e904367ab518cc06d?mode=embed" width="800" height="600" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
                    </div>
                  </td>
                  <td width='50%'>
                    <div align="center">
                      <PanelGroup accordion id="accordion">
                        <Panel eventKey="1" bsStyle="primary">
                          <Panel.Heading>
                            <Panel.Title toggle><h3>Radiation Detection</h3></Panel.Title>
                          </Panel.Heading>
                          <Panel.Body collapsible>
                            <h2>Pocket Geiger Module</h2>
                            <h3>1. Gamma particles</h3>
                            <h3>2. Beta particles</h3>
                            <h3>3. Noise rejection</h3>
                          </Panel.Body>
                        </Panel>
                        <Panel eventKey="2" bsStyle="primary">
                          <Panel.Heading>
                            <Panel.Title toggle><h3>Small Size</h3></Panel.Title>
                          </Panel.Heading>
                          <Panel.Body collapsible>
                            <h3>1. Arduino operated</h3>
                            <h3>2. Battery powered</h3>
                            <h3>3. Computer integrated</h3>
                          </Panel.Body>
                        </Panel>
                        <Panel eventKey="3" bsStyle="primary">
                          <Panel.Heading>
                            <Panel.Title toggle><h3>Communication Capability</h3></Panel.Title>
                          </Panel.Heading>
                          <Panel.Body collapsible>
                            <h2>For USERS:</h2>
                            <h3>Immediate vibration feedback</h3>
                            <h2>For SAFETY OFFICERS:</h2>
                            <h3>Real time online monitoring and data logging</h3>
                          </Panel.Body>
                        </Panel>
                      </PanelGroup>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
					</Jumbotron>
				</Col>
      </div>
    )
  }
}