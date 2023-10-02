import { useState } from "react";
import "./Busqueda.css";
import axios from "axios"

export default function Busqueda() {

  const [resultadosBusqueda, setResultadosBusqueda] = useState([])


  const handleSubmit = async (values) => {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${values}`
      ); // acá hacemos la consulta de axios a la API
      setResultadosBusqueda(response.data.results);
  };  

  return (
    <div class="container">
      <form class="form">
        <button>
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              stroke-width="1.333"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <input
          class="input"
          placeholder="Search for a product"
          required=""
          type="text"
        />
        <button class="reset" type="reset">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div class="radio-inputs">
          <label class="radio">
            <input type="radio" name="radio" />
            <span class="name">Filtro 1</span>
          </label>
          <label class="radio">
            <input type="radio" name="radio" />
            <span class="name">Filtro 2</span>
          </label>

          <label class="radio">
            <input type="radio" name="radio" />
            <span class="name">Filtro 3</span>
          </label>
        </div>
        <button
        type="submit"
        onSubmit={handleSubmit}>
        </button>
      </form>
    </div>
  );
}
