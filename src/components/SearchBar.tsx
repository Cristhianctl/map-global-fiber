import {ChangeEvent,useContext, useRef} from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './SearchResults';


export const SearchBar = () => {

  const {searchPlaceByTern} = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) =>{
    if(debounceRef.current)
      clearTimeout(debounceRef.current);
    
      debounceRef.current = setTimeout(() =>{
        //todo: buscar o ejecutar consulta
        searchPlaceByTern(event.target.value);

      }, 350);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar..."
        onChange={onQueryChanged}
      />
      <SearchResults />
    </div>
  )
}


