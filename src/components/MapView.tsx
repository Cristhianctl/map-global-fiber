import {useContext, useLayoutEffect, useRef} from 'react';
import { MapContext, PlacesContext } from '../context';
import { Loading } from './Loading';
import mapboxgl from 'mapbox-gl';




export const MapView = () => {

  const {isLoading, userLocation} = useContext(PlacesContext);
  const {setMap} = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if( !isLoading ) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!, 
        style: 'mapbox://styles/mapbox/streets-v12',
        center: userLocation, 
        zoom: 14, 
      });

      setMap( map );
    }
  },[isLoading])

  if(isLoading){
    return(<Loading />)
  }

  return (
    <div className='map-div' ref={mapDiv}>

      {userLocation?.join(',')}

    </div>
  )
}

