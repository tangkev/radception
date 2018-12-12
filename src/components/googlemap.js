import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const latCoord = this.props.latCoord;
    const longCoord = this.props.longCoord;

    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center', padding: 0 }}>
        <Map
          google={this.props.google}
          zoom={16}
          containerStyle={{ width: '400px', height: '400px', position: 'relative' }}
          style={mapStyles}
          initialCenter={{
            lat: latCoord,
            lng: longCoord
          }}
          center={{
            lat: latCoord,
            lng: longCoord
          }}
        >
          <Marker position={{lat: latCoord, lng: longCoord}}/>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAIhzuJ83HuQeGh8ZRnzcn7XHksf3E1NhM'
})(GoogleMap);