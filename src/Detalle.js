import "./Detalle.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAPI } from "./apiContext";

export default function Detalle() {
  const { id } = useParams();
  const { productos } = useAPI();
  const [productoElegido, setProductoElegido] = useState({});

  useEffect(() => {
    for (let index = 0; index < productos.length; index++) {
      if (productos[index].id === id) {
        setProductoElegido(productos[index]);
      }
    }
    productos.filter((p) => {
      if (p.id == id) {
        setProductoElegido(p);
      }
    });
  }, []);

  return (
    <div className="container">
      {productoElegido && (
        <>
          <p> {productoElegido.title}</p>
        </>
      )}
    </div>
  );
}
