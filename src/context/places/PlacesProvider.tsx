import { useReducer, useEffect } from 'react'
import { PlacesContext } from './PlacesContext';
import { PlacesReducer } from './PlacesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../apis';
import { Feature, PlacesResponse } from '../../interfaces/places';

export interface PlacesState{
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState ={
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
}

interface Props{
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({children}: Props) => {

  const [state, dispatch] = useReducer(PlacesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation()
    .then(lngLat => dispatch({type: 'setUserLocation', payload: lngLat }))
  }, []);

  const searchPlaceByTern = async (query:string): Promise<Feature[]> => {
    if(query.length === 0) {
      dispatch({type: 'setPlaces', payload: []});
      return [];
    }; //todo: limpiar state

    if(!state.userLocation) throw new Error('No hay Ubicacion disponible');

    dispatch({type: 'setLoadingPlaces'});

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`,{
      params:{
        proximity: state.userLocation.join(',')
      }
    });

    dispatch({type: 'setPlaces', payload: resp.data.features});

    return resp.data.features;
  }

  return (
    <PlacesContext.Provider value={{
      ...state,

      //Methods
      searchPlaceByTern
    }}>
      {children}
    </PlacesContext.Provider>
  )
}

