import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { Feature } from '../interfaces/places';


export const SearchResults = () => {

  const {places, isLoadingPlaces} = useContext(PlacesContext);
  const {map} = useContext(MapContext)

  const [activeId, setActiveId] = useState('')

  const onPlaceClicked = (place: Feature) =>{
    setActiveId( place.id );
    const [lng, lat] = place.center;
    

    map?.flyTo({
      zoom: 16,
      center: [lng, lat],
    })
  }

  if(isLoadingPlaces){
    return(
      <div className='alert alert-primary mt-2 text-center' >
        <h6>Buscando</h6>
        <p>Espere por favor...</p>
      </div>
    )
  }

  return (
    <ul className="list-group mt-3">

      {
        places.map(place => (
          <li 
            key={place.id} 
            className={`list-group-item list-group-item-action pointer ${(activeId === place.id) ? 'active': '' } `}
            onClick={()=> onPlaceClicked(place)}
            >

            <h6>{place.text_es}</h6>

            <p>{place.place_name}</p>

            <button className={`btn btn-sm  ${activeId === place.id ? 'btn-outline-light': 'btn-outline-primary' } `} >
              Direcion
            </button>
          </li>

        ))
      }

    </ul>
  )
}
