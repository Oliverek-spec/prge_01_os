import React from "react";
import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import "./map.css";
import "leaflet/dist/leaflet.css";

export default function map() {
  return (
    <div>
      <MapContainer center={[52.2322222, 21.0]} zoom={6}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="GoogleSatellite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
}
