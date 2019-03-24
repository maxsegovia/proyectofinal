import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 19.433555,
      lng: -99.172938,
    },
    zoom: 18
  };

  render() {
    return (
      <div className="map-canvas" id="map-canvas-contact">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCN49WJtuInPHldDFeQO05ME2OX3bItAZo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={19.433555}
            lng={-99.172938}
            text={'Mi pecera'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
