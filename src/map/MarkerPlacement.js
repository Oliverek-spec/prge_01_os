import React, { useState } from "react";
import { Circle, Marker, Popup, useMapEvent } from "react-leaflet";
import { markericon } from "./icon";

function MarkerPlacement() {
  const [position, setPosition] = useState([52.0, 21.0]);
  const [mass, setMass] = useState([1000]);
  const radius1 = (mass) => {
    return Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89);
  };
  const radius2 = (mass) => {
    return Math.pow(mass, 1 / 3) / Math.pow(30 / 980, 1 / 1.89);
  };
  const radius3 = (mass) => {
    return Math.pow(mass, 1 / 3) / Math.pow(15 / 980, 1 / 1.89);
  };
  const map = useMapEvent({
    click: (e) => {
      setPosition(e.latlng);
    },
  });
  return (
    <div>
      <Marker icon={markericon} position={position}>
        <Popup>
          podaj masę ładunku wybuchowego w kilogramach
          <input
            type="range"
            min="0"
            max="750000000"
            defaultValue="0"
            onChange={(e) => {
              setMass(e.target.value);
            }}
          />{" "}
          {mass} kg
        </Popup>
      </Marker>
      <Circle
        center={position}
        radius={radius3(mass)}
        pathOptions={{ color: "yellow" }}
      />
      <Circle
        center={position}
        radius={radius2(mass)}
        pathOptions={{ color: "orange" }}
      />
      <Circle
        center={position}
        radius={radius1(mass)}
        pathOptions={{ color: "red" }}
      />
    </div>
  );
}

export default MarkerPlacement;
