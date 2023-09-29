import "./Home.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {Link} from "react-router-dom"

export default function Home() {
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
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://images.all-free-download.com/images/graphiclarge/adorable_animal_breed_canine_cute_dog_doggy_603714.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg?fit=700%2C467" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      <div className="cards">
        <div class="card">
          <div className="card-image">
            <img
              width="300px"
              height="auto"
              src="https://images.pexels.com/photos/7864858/pexels-photo-7864858.jpeg?cs=srgb&dl=pexels-michael-morse-7864858.jpg&fm=jpg"
            ></img>
          </div>
          <div class="card__content">
            <p class="card__title">Card Title</p>
            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
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
              src="https://images.pexels.com/photos/7864858/pexels-photo-7864858.jpeg?cs=srgb&dl=pexels-michael-morse-7864858.jpg&fm=jpg"
            ></img>
          </div>
          <div class="card__content">
            <p class="card__title">Card Title</p>
            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
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
              src="https://images.pexels.com/photos/7864858/pexels-photo-7864858.jpeg?cs=srgb&dl=pexels-michael-morse-7864858.jpg&fm=jpg"
            ></img>
          </div>
          <div class="card__content">
            <p class="card__title">Card Title</p>
            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            
            <button>
              <span><Link to="/detalle/1"> Detalle</Link></span>
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
              src="https://images.pexels.com/photos/7864858/pexels-photo-7864858.jpeg?cs=srgb&dl=pexels-michael-morse-7864858.jpg&fm=jpg"
            ></img>
          </div>
          <div class="card__content">
            <p class="card__title">Card Title</p>
            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
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
              src="https://images.pexels.com/photos/7864858/pexels-photo-7864858.jpeg?cs=srgb&dl=pexels-michael-morse-7864858.jpg&fm=jpg"
            ></img>
          </div>
          <div class="card__content">
            <p class="card__title">Card Title</p>
            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
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
              src="https://images.pexels.com/photos/7864858/pexels-photo-7864858.jpeg?cs=srgb&dl=pexels-michael-morse-7864858.jpg&fm=jpg"
            ></img>
          </div>
          <div class="card__content">
            <p class="card__title">Card Title</p>
            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
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
