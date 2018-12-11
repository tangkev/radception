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
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center', padding: 0 }}>
        <Map
          google={this.props.google}
          zoom={16}
          containerStyle={{ width: '400px', height: '400px', position: 'relative' }}
          style={mapStyles}
          initialCenter={{
           lat: 42.357349,
           lng: -71.101063
          }}
        >
          <Marker />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAIhzuJ83HuQeGh8ZRnzcn7XHksf3E1NhM'
})(GoogleMap);