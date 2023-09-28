import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Імпортуємо стилі для Leaflet
import s from "./map.module.css";
import L from "leaflet";
const MapComponentForStores = ({ name, adress, position, center }) => {
  const customMarkerIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/9131/9131546.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  return (
    <MapContainer
      center={center}
      zoom={13}
      className={s.mapContainer}
      style={{ height: "100vh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>
          Магазин компʼютерної техніки <strong>"{name}"</strong> <br /> м.
          {adress}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponentForStores;
