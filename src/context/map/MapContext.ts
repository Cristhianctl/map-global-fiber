/* eslint import/no-webpack-loader-syntax: off */
import { createContext } from "react";
//@ts-ignore
import { Map } from "!mapbox-gl";

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;

  //Methods
  setMap: (map: Map) => void,
};


export const MapContext = createContext({} as MapContextProps );