/* eslint import/no-webpack-loader-syntax: off */

import {useContext, useLayoutEffect, useRef} from 'react';
import { MapContext, PlacesContext } from '../context';
import { Loading } from './Loading';

//@ts-ignore
import mapboxgl from '!mapbox-gl';

export const MapView = () => {

  const {isLoading, userLocation} = useContext(PlacesContext);
  const {setMap} = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    if( !isLoading ) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!, 
        style: 'mapbox://styles/cristhiantl96/cli92dq7605ao01qn1lug9x6q',
        center: userLocation, 
        zoom: 14, 
      });
      setMap( map );
    }
  },[isLoading]);

  if(isLoading){
    return(<Loading />)
  }

  return (
    <div className='map-div' ref={mapDiv}>

      {userLocation?.join(',')}

    </div>
  )
}

