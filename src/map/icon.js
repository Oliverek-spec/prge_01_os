import L from "leaflet";
import marker from "./marker.png";
const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [8, 12],
    iconAnchor: [5, 10],
    tooltipAnchor: [5, 10],
  },
});
export const markericon = new LeafIcon({ iconUrl: marker });
