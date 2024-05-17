import { Link } from "react-router-dom";
import React from "react";
import "./Services.css";
function Services() {
  return (
    <div className="services">
      <div className="services_title">Dostępne usługi</div>
      <div className="services_options">
        <Link to="map">
          <button className="services_button_map">Mapa</button>
        </Link>
        <Link to="dashboard">
          <button className="services_button_database">Baza danych</button>
        </Link>
        <div className="services_gallery">Galeria</div>
      </div>
    </div>
  );
}

export default Services;
