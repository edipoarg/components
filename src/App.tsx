import { Map } from "../lib/components/Map/Map";
import { MapSourceData } from "../lib/components/Map/MapSource";
import "./App.css";

const mapSources: MapSourceData[] = [
  {
    // country (bs as)
    data: 123132,
    style: {
      "fill-color": "#bacbff",
      "fill-opacity": 0.6,
      "fill-outline-color": "#2b3bcd",
    },
    type: "fill",
    minZoom: 6,
  },
  {
    // departamentos
    data: 123213,
    style: {
      "fill-color": "#bacbff",
      "fill-opacity": 0,
      "fill-outline-color": "black",
    },
    type: "fill",
    minZoom: 6,
  },
];

function App() {
  return (
    <ul>
      <li>
        <h4>MAP</h4>
        <Map
          mapConfig={{
            initialViewState: {
              longitude: -72.0, // Coordenada longitudinal de Argentina
              latitude: -40.0, // Coordenada latitudinal de Argentina
              zoom: 2.7, //zoom inicial
              minZoom: 2, // Nivel mínimo de zoom permitido
              maxZoom: 15, // Nivel máximo de zoom permitido
            },
            mapStyle: {
              center: [17.65431710431244, 32.954120326746775],
              zoom: 1,
            },
            style: {
              height: "100vw",
              width: "90vh",
            },
          }}
          markerByPointOfInterest={() => <></>}
          pointsOfInterest={[]}
          sources={mapSources}
        />
      </li>
    </ul>
  );
}

export default App;
