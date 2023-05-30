/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3RoaWFudGw5NiIsImEiOiJjbGh0aWdyaWgwZ2d4M3JwazAxbDl5cDVlIn0.m8-ci7_QdbqxcRG8JS4CNQ';


if( !navigator.geolocation){
  alert('Tu navegador no tiene opcion de Geolocalizacion');
  throw new Error('Tu navegador no tiene opcion de Geolocalizacion');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
