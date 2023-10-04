import "./Home.css";
import React, { Component, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useAPI } from "./apiContext";

export default function Home() {
  const { productos } = useAPI();
  return (
    <div class="container">
      <div className="center-div">
        {console.log(productos)}
        <Carousel
          class="carousel"
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <img src="https://i.ytimg.com/vi/TX9qSaGXFyg/maxresdefault.jpg" />
          </div>
          <div>
            <img src="https://www.ventasrosario.com.ar/wp-content/uploads/2023/01/40-nc-alum-starlight-sport-band-starlight.jpg" />
          </div>
        </Carousel>
      </div>
      
      <div className="cards">

      {productos.map((p) => (
        p.id<=6 &&
          <div class="card">
            <div className="card-image">
              <img width="300px" height="auto" src={p.images[1]} />
            </div>
            <div class="card__content">
              <p class="card__title">{p.title}</p>
              <p class="card__description">{p.description}</p>

              <button>
                <span>
                  <Link to={`/detalle/${p.id}`} key={p.id}> Detalle</Link>
                </span>
              </button>
            </div>
          </div>
      ))}
              </div>

    </div>
  );
}
