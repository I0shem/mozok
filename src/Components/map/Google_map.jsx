import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Імпортуємо стилі для Leaflet
import map_marker from "../Images/map_marker.png";
import L from "leaflet";
const MapComponent = () => {
  const customMarkerIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/9131/9131546.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  return (
    <MapContainer
      center={[49.21036, 28.46964]}
      zoom={13}
      style={{ height: "100vh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[49.23333, 28.46964]} icon={customMarkerIcon}>
        <Popup>
          Магазин компʼютерної техніки <strong>Mozok</strong> <br /> м. Вінниця,
          вул. Соборна 30
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
