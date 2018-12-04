import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state={
      center: {
        lat: 40.7233,
        lng: -74.0030
      },
      zoom: 11
    }
  }

  render() {
    return (
      <div className="App" style={{ height: '80vh', width: '100%' }}>
        Map here
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAUAaYODAySdg0ICAX4u9ganJ7gQGFz834", language: "en"}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={40.7233}
            lng={-74.0030}
            text={'Soho'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
