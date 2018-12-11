import React, { Component } from 'react';
import { Col, Panel, Table } from 'react-bootstrap';
import axios from 'axios';
import GoogleMap from './googlemap';

export default class Device extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Device 001</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Table bordered responsive>
              <tbody>
                <tr>
                  <td colSpan="2">Reading:</td>
                </tr>
                <tr>
                  <td width='50%'>
                    Graph
                  </td>
                  <td width='50%'>
                    <GoogleMap />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}