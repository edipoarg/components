import {Marker} from 'react-map-gl';
import MapGL from "react-map-gl/maplibre";
import { NavigationControl } from "react-map-gl/maplibre";
import maplibregl, { StyleSpecification } from "maplibre-gl";
import { MapSource, MapSourceData } from "./MapSource";
import { defaultMapConfig, defaultMapStyles } from "./map-default-config";

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
  <Marker latitude={Number(poi.coords.latitude)} longitude={Number(poi.coords.longitude)}>
        "SAPE"
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
