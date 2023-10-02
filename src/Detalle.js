import "./Detalle.css";
import {useState, useEffect} from "react"
import axios from "axios"

export default function Detalle({route}) {
  const [productoElegido, setProductoElegido] = useState({});
  useEffect(() => {
    const id = route.params.id;
    async function getById(id) {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=16e51661dd5e48d3aabf05fb9a637d13`
      );
      setProductoElegido(response.data);
    }
    getById(id);
  }, []);
  return (
    <div className="container">
      <div class="card1">
        <div class="card-img1">
          <div class="img1">
            <img src={productoElegido.images[1]} />
          </div>
          <div class="img1">
            <img src={productoElegido.images[2]} />
          </div>
          <div class="img1">
            <img src={productoElegido.images[3]} />
          </div>
        </div>
        <div class="card-title1">{productoElegido.title}</div>
        <div class="card-subtitle1">
        {productoElegido.description}
        </div>
        <hr class="card-divider1" />
        <div class="card-footer1">
          <div class="card-price1">
            <span>$</span> {productoElegido.price}
          </div>
          <button class="card-btn1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
              <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
              <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
              <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
