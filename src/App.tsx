import React, { useEffect } from "react";
import { Grommet } from "grommet";
import mapboxgl, { MapboxOptions } from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN || "add-a-key";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  useEffect(() => {
    const options: MapboxOptions = {
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [5, 34],
      zoom: 2,
    };

    const map = new mapboxgl.Map(options);
    return () => {
      map.remove();
    };
  }, []);

  return (
    <Grommet theme={theme}>
      <div
        id="map"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "100%",
        }}
      />
    </Grommet>
  );
}

export default App;
