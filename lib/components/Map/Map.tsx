import {Marker} from 'react-map-gl';
import MapGL from "react-map-gl/maplibre";
import { NavigationControl } from "react-map-gl/maplibre";
import maplibregl, { StyleSpecification } from "maplibre-gl";
import { MapSource, MapSourceData } from "./MapSource";
import { defaultMapConfig, defaultMapStyles } from "./map-default-config";
import 'maplibre-gl/dist/maplibre-gl.css';

interface MapStyle {
    center: [number, number];
    zoom: number;
};

interface MapConfig {
  initialViewState: {
    longitude: number;
    latitude: number;
    zoom: number;
    minZoom: number;
    maxZoom: number;
  };
  style: {
    width: string;
    height: string;
  };
  mapStyle: MapStyle;
}

interface Props<T> {
  sources: MapSourceData[];
  mapConfig: MapConfig;
  pointsOfInterest: T[];
  markerByPointOfInterest: (poi: T) => JSX.Element;
  children: JSX.Element;
}

const voidPOI = (poi: any) => poi && poi.coords && poi.coords.latitude && poi.coords.longitude &&
  <Marker latitude={Number(poi.coords.latitude)} longitude={Number(poi.coords.longitude)} key={poi.key}>
    <img style={{width: "20px", height: "20px"}}
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimagensemoldes.com.br%2Fwp-content%2Fuploads%2F2020%2F08%2FFoto-de-Pin-PNG.png&f=1&nofb=1&ipt=f73aa1ce4b802d9e34ec1230736689ea2f6cf1d62e3ec700270ec859c93f4385&ipo=images"
    />
  </Marker>

export function Map<T>({
  sources = [],
  mapConfig = defaultMapConfig,
  pointsOfInterest = [],
  markerByPointOfInterest = voidPOI,
  children
}: Props<T>) {
  const mapGlStyleSpecification: StyleSpecification = {
    ...defaultMapStyles,
    ...mapConfig.mapStyle,
  };

  const mapGlProps: React.ComponentProps<typeof MapGL> = {
    mapLib: maplibregl,
    ...mapConfig,
    mapStyle: mapGlStyleSpecification,
  };

  return (
    <MapGL {...mapGlProps}>
      {sources.map((source, index) => <MapSource key={index} {...source}/>)}
      <Marker longitude={mapGlProps.initialViewState?.longitude ?? 0}
        latitude={mapGlProps.initialViewState?.latitude ?? 0} />
      {pointsOfInterest.map((poi) => markerByPointOfInterest(poi))}
      <NavigationControl position="top-right" />

      {children}
    </MapGL>
  );
}
