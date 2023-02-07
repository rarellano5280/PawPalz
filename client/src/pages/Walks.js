import React from 'react';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Walks = () => {
  return (
    <div>
      <div id="map"></div>
    </div>
  );
};

export default Walks;
