import "./Home.css";
import React, { Component, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {Link} from "react-router-dom"
import { MyContext } from "./MyContext";
import axios from "axios"



export default function Home() {

  const {productos, setProductos} = useContext(MyContext)

  useEffect(() => {
    async function getProductos(){
      const response = await axios.get(
        `https://dummyjson.com/products`
      );
      setProductos(response.data);
    }
    getProductos();
  }, []);


  return (
    <div class="container">
      <div className="center-div">
        <Carousel
          class="carousel"
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg" />
          </div>

          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg" />
          </div>
          
        </Carousel>
      </div>
      <div className="cards">
        <div class="card">
          <div className="card-image">
            <img
              width="300px"
              height="auto"
              src={productos[1].images[1]}
            ></img>
          </div>
          <div class="card__content">
            <p class="card__title">{productos[1].title}</p>
            <p class="card__description">
             {productos[1].description}
            </p>
            
            <button>
              <span><Link to="/detalle/1"> Detalle</Link></span>
            </button>
          </div>
        </div>
        <div class="card">
          <div className="card-image">
            <img
              width="300px"
              height="auto"
              src={productos[2].images[1]}
            ></img>
          </div>
          <div class="card__content">
            <p class="card__title">{productos[2].title}</p>
            <p class="card__description">
              {productos[2].description}
            </p>
            
            <button>
              <span><Link to="/detalle/2"> Detalle</Link></span>
            </button>
          </div>
        </div>
        <div class="card">
          <div className="card-image">
            <img
              width="300px"
              height="auto"
              src={productos[3].images[1]}
            ></img>
          </div>
          <div class="card__content">
            <p class="card__title">{productos[3].title}</p>
            <p class="card__description">
              {productos[3].description}
            </p>
            
            <button>
              <span><Link to="/detalle/3"> Detalle</Link></span>
            </button>
          </div>
        </div>
      </div>
      <div className="cards">
        <div class="card">
          <div className="card-image">
            <img
              width="300px"
              height="auto"
              src={productos[4].images[1]}
            ></img>
          </div>
          <div class="card__content">
            <p class="card__title">{productos[4].title}</p>
            <p class="card__description">{productos[4].description}
            </p>
            
            <button>
              <span><Link to="/detalle/1"> Detalle</Link></span>
            </button>
          </div>
        </div>
        <div class="card">
          <div className="card-image">
            <img
              width="300px"
              height="auto"
              src={productos[5].images[1]}
              ></img>
            </div>
            <div class="card__content">
              <p class="card__title">{productos[5].title}</p>
              <p class="card__description">{productos[5].description}
              </p>
            
            <button>
              <span><Link to="/detalle/1"> Detalle</Link></span>
            </button>
          </div>
        </div>
        <div class="card">
          <div className="card-image">
            <img
              width="300px"
              height="auto"
              src={productos[6].images[1]}
            ></img>
          </div>
          <div class="card__content">
            <p class="card__title">{productos[6].title}</p>
            <p class="card__description">{productos[6].description}
            </p>
            <button>
              <span><Link to="/detalle/1"> Detalle</Link></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
