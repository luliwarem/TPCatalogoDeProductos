import { useState, useEffect } from "react";
import "./Busqueda.css";
import axios from "axios";
import { Link } from "react-router-dom";

import { useAPI } from "./apiContext";

export default function Busqueda() {
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [palabraBuscada, setPalabraBuscada] = useState([]);

  const { categorias } = useAPI();

    const buscarPorPalabra = async (event) => {
      setPalabraBuscada(event.target.value.toLowerCase());
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${palabraBuscada}`
      ); // acá hacemos la consulta de axios a la API
      setResultadosBusqueda(response.data.products);
    };


  const buscarPorFiltro = async (event) => {
    const filtroSeleccionado = event.target.innerHTML;
    const response = await axios.get(
      `https://dummyjson.com/products/category/${filtroSeleccionado}`
    );
    console.log(response.data.products); // acá hacemos la consulta de axios a la API
    setResultadosBusqueda(response.data.products);
  };

  return (
    <div className="container">
      <form className="form">
        <input
          className="input"
          placeholder="Search for a product"
          type="text"
          name="search"
          onChange={buscarPorPalabra}
        />

        <div class="paste-button">
          <button class="button">Categories &nbsp; ▼</button>
          <div class="dropdown-content">
            {categorias.map((c) => (
              <div>
                <a id="top" onClick={buscarPorFiltro}>
                  {c}
                </a>
              </div>
            ))}
          </div>
        </div>
      </form>

      <div className="cards">
        {resultadosBusqueda.map((p) => (
          <div class="card">
            <div className="card-image">
              <img width="300px" height="auto" src={p.images[1]} />
            </div>
            <div class="card__content">
              <p class="card__title">{p.title}</p>
              <p class="card__description">{p.description}</p>

              <button>
                <span>
                  <Link to={`/detalle/${p.id}`} key={p.id}>
                    {" "}
                    Detalle
                  </Link>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
