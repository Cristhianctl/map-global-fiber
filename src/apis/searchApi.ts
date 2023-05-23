import axios from "axios";


const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params:{
    limit: 5,
    language: 'es',
    access_token: 'pk.eyJ1IjoiY3Jpc3RoaWFudGw5NiIsImEiOiJjbGh0aWdyaWgwZ2d4M3JwazAxbDl5cDVlIn0.m8-ci7_QdbqxcRG8JS4CNQ',
  }

});

export default searchApi;