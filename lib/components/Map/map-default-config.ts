import { StyleSpecification } from "maplibre-gl";

export const defaultInitialViewState = {
    longitude: 17.65431710431244,
    latitude: 32.954120326746775,
    zoom: 10,
    minZoom: 1,
    maxZoom: 24
  }

export const defaultMapStyles =  {
  id: "43f36e14-e3f5-43c1-84c0-50a9c80dc5c7",
  name: "MapLibre",
  zoom: 0.8619833357855968,
  pitch: 0,
  center: [17.65431710431244, 32.954120326746775],
  glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "#e9f1ec",
      },
      layout: {
        visibility: "visible",
      },
      maxzoom: 24,
    },
    {
      id: "coastline",
      type: "line",
      paint: {
        "line-blur": 3,
        "line-color": "#7d97ec",
        "line-width": {
          type: "interval",
          stops: [
            [0, 2],
            [6, 6],
            [14, 9],
            [22, 18],
          ],
        },
      },
      filter: ["all"],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "maplibre",
      maxzoom: 24,
      minzoom: 0,
      "source-layer": "countries",
    },
    {
      id: "countries-boundary",
      type: "line",
      paint: {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": {
          type: "interval",
          stops: [
            [1, 0.3],
            [6, 1],
            [14, 15],
            [22, 12],
          ],
        },
        "line-opacity": {
          type: "interval",
          stops: [
            [3, 0.5],
            [6, 1],
          ],
        },
      },
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible",
      },
      source: "maplibre",
      maxzoom: 24,
      "source-layer": "countries",
    },
    {
      id: "geolines",
      type: "line",
      paint: {
        "line-color": "#FFFFFF",
        "line-opacity": 1,
        "line-dasharray": [3, 3],
      },
      filter: ["all", ["!=", "name", "International Date Line"]],
      layout: {
        visibility: "visible",
      },
      source: "maplibre",
      maxzoom: 24,
      "source-layer": "geolines",
    },
    {
      id: "geolines-label",
      type: "symbol",
      paint: {
        "text-color": "#ffffff",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255, 255, 255, 0)",
        "text-halo-width": 0,
      },
      filter: ["all", ["!=", "name", "International Date Line"]],
      layout: {
        "text-font": ["Open Sans Semibold"],
        "text-size": {
          type: "interval",
          stops: [
            [2, 0],
            [6, 0],
          ],
        },
        "text-field": "{name}",
        visibility: "visible",
        "symbol-placement": "line",
      },
      source: "maplibre",
      maxzoom: 24,
      minzoom: 1,
      "source-layer": "geolines",
    },
    {
      id: "countries-label",
      type: "symbol",
      paint: {
        "text-color": "rgba(0, 0, 0, 0)",
        "text-halo-blur": {
          type: "interval",
          stops: [
            [0, 0],
            [0, 0],
          ],
        },
        "text-halo-color": "rgba(255, 255, 255, 0)",
        "text-halo-width": {
          type: "interval",
          stops: [
            [2, 1],
            [6, 1.6],
          ],
        },
      },
      filter: ["all"],
      layout: {
        "text-font": ["Open Sans Semibold"],
        "text-size": {
          type: "interval",
          stops: [
            [2, 10],
            [4, 11],
            [6, 20],
          ],
        },
        "text-field": {
          type: "interval",
          stops: [
            [2, "{ABBREV}"],
            [4, "{NAME}"],
          ],
        },
        visibility: "visible",
        "text-max-width": 10,
        "text-transform": {
          type: "interval",
          stops: [
            [0, "uppercase"],
            [2, "none"],
          ],
        },
      },
      source: "maplibre",
      maxzoom: 24,
      minzoom: 2,
      "source-layer": "centroids",
    },
    {
      id: "crimea-fill",
      type: "fill",
      source: "crimea",
      paint: {
        "fill-color": "#D6C7FF",
      },
    },
  ],
  bearing: 0,
  sources: {
    maplibre: {
      url: "https://demotiles.maplibre.org/tiles/tiles.json",
      type: "vector",
    },
  },
  version: 8 as const,
  metadata: {
    "maptiler:copyright":
                                             "This style was generated on MapTiler Cloud. Usage is governed by the license terms in https://github.com/maplibre/demotiles/blob/gh-pages/LICENSE",
    "openmaptiles:version": "3.x",
  },
} satisfies StyleSpecification & { id: string; center: [number, number];};

export const defaultMapConfig = {
  initialViewState: defaultInitialViewState,
  style: {
    width: "100%",
    height: "100%"
  },
  mapStyle: defaultMapStyles
}
