import MapGL from "react-map-gl/maplibre";
import { NavigationControl } from "react-map-gl/maplibre";
import maplibregl, { StyleSpecification } from "maplibre-gl";
import { MapSource, MapSourceData } from "./MapSource";
import { defaultMapStyles } from "./map-default-config";

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
  mapStyle: {
    center: [number, number];
    zoom: number;
  };
}

interface Props<T> {
  sources: MapSourceData[];
  mapConfig: MapConfig;
  pointsOfInterest: T[];
  markerByPointOfInterest: (poi: T) => JSX.Element;
}

export function Map<T>({
  sources,
  mapConfig,
  pointsOfInterest,
  markerByPointOfInterest,
}: Props<T>) {
  const mapGlStyleSpecification: StyleSpecification = {
    ...mapConfig.mapStyle,
    ...defaultMapStyles,
  };

  const mapGlProps: React.ComponentProps<typeof MapGL> = {
    mapLib: maplibregl,
    ...mapConfig,
    mapStyle: mapGlStyleSpecification,
  };
  return (
    <MapGL {...mapGlProps}>
      {sources.map((source, index) => {
        <MapSource key={index} {...source} />;
      })}
      {pointsOfInterest.map((poi) => markerByPointOfInterest(poi))}
      <NavigationControl position="top-right" />
    </MapGL>
  );
}
