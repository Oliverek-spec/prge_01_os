import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";
import plan_wat from "./plan_wat.jpg";
function Home({ tekst }) {
  return (
    <div className="home">
      <div className="home_top">
        <div className="about">O projekcie</div>
      </div>
      {/* 1. home left placeholder */}
      <div className="home_left">
        <img className="plan_wat" src={plan_wat} alt="logo" />
      </div>
      {/* 2. home right placeholder */}
      <div className="home_right">
        <div className="home_title">MAPA</div>
        <div className="home_subtitle">
          Strona internetowa z interaktywną mapą
        </div>

        <Link to="services">
          <button className="home_button">WCHODZĘ</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
