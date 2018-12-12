import React, { Component } from 'react';
import { Col, Panel, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import GoogleMap from './googlemap';
import GoogleLineGraph from './googlelinegraph';

export default class Device extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphReadings: [[0,0]],
      latCoord: 0.0,
      longCoord: 0.0,
    }
  }

  update = () => {
    const device = this.props.device;
    const deviceurl = 'http://radception-server.serveo.net/devices/' + device;
    axios({
      method: 'GET',
      url: deviceurl
      })
      .then(res => {
        const resp = res.data;
        this.setState({ graphReadings: resp['currentreadings'][0] })
        this.setState({ latCoord: resp['currentreadings'][1] })
        this.setState({ longCoord: resp['currentreadings'][2] })
      })
  }

  continuousUpdate = () => {
    const loggedOn = this.props.loggedOn;
    if (loggedOn) {
      setInterval(this.update, 1000)  
    }
    else {
      clearInterval()
    }
  }

  render () {
    const device = this.props.device;
    const { graphReadings, latCoord, longCoord } = this.state;
    const lastReading = graphReadings[graphReadings.length-1][1];

    return (
      <div>
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Device {device}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Table bordered responsive>
              <tbody>
                <tr>
                  <td width='50%'>
                    <div align="center">
                      <h4>Reading: {lastReading}</h4>
                    </div>
                  </td>
                  <td width='50%'>
                    <div align="center">
                      <Button onClick={this.continuousUpdate}>Update</Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width='50%'>
                    <GoogleLineGraph graphReadings={this.state.graphReadings} />
                  </td>
                  <td width='50%'>
                    <GoogleMap longCoord={this.state.latCoord} latCoord={this.state.longCoord} />
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