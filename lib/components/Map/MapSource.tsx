import { Source, Layer } from "react-map-gl/maplibre";
import type {
  FillLayerSpecification,
  LineLayerSpecification,
} from "maplibre-gl";

type LinePaintProperty = NonNullable<LineLayerSpecification["paint"]>;

interface BaseProps {
  data: unknown;
  minZoom?: number;
}

type LineLayerProps = BaseProps & {
  type: "line";
  style: {
    "line-color": LinePaintProperty["line-color"];
    "line-opacity": LinePaintProperty["line-opacity"];
    "line-width": LinePaintProperty["line-width"];
  };
};

type LayerPaintProperty = NonNullable<FillLayerSpecification["paint"]>;
type FillLayerProps = BaseProps & {
  type: "fill";
  style: {
    "fill-color": LayerPaintProperty["fill-color"];
    "fill-opacity": LayerPaintProperty["fill-opacity"];
    "fill-outline-color": LayerPaintProperty["fill-outline-color"];
  };
};

// This is what the consumer should provide to the Map
export type MapSourceData = LineLayerProps | FillLayerProps;


export function MapSource({ data, type, style, minZoom }: MapSourceData) {
  return (
    <Source type="geojson" data={data}>
      {
        // Typescript was throwing a nasty error before I created this ternary: `"fill" | "line" is not assignable to type "'symbol'"`.
        // Doesn't make sense to me! I gave TS scopes where the types are clearly "fill" and "line" respectively.
        type === "fill" ? (
          <Layer type={type} paint={style} minzoom={minZoom} />
        ) : (
          <Layer type={type} paint={style} minzoom={minZoom} />
        )
      }
    </Source>
  );
}
