import React from 'react';

// import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

// mapboxgl.accessToken =
//   'pk.eyJ1IjoiYW50b25pb2R1cmFuanIiLCJhIjoiY2xkdGR6N280MDV1ZDNubDh4ZHY5anhsbSJ9.M9e_MnBRToSJ4SQ4PkWqaA';

const Walks = () => {
  // TO MAKE THE MAP APPEAR YOU MUST
  // ADD YOUR ACCESS TOKEN FROM
  // https://account.mapbox.com

  // const map = new mapboxgl.Map({
  //   container: 'map', // container ID
  //   style: 'mapbox://styles/mapbox/streets-v12', // style URL
  //   center: [-74.5, 40], // starting position [lng, lat]
  //   zoom: 9, // starting zoom
  // });

  // const geocoder = new MapboxGeocoder({
  //   accessToken: mapboxgl.accessToken,
  //   mapboxgl: mapboxgl,
  // });

  // map.on('load', () => {
  //   map.addLayer({
  //     id: 'rpd_parks',
  //     type: 'fill',
  //     source: {
  //       type: 'vector',
  //       url: 'mapbox://mapbox.3o7ubwm8',
  //     },
  //     'source-layer': 'RPD_Parks',
  //     layout: {
  //       visibility: 'visible',
  //     },
  //     paint: {
  //       'fill-color': 'rgba(61,153,80,0.55)',
  //     },
  //   });
  // });

  return <div id="map"></div>;
};

export default Walks;
